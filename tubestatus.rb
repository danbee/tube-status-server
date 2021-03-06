require 'sinatra'
require 'json'
require 'xmlsimple'
require 'faraday'

configure :production do
  require 'newrelic_rpm'
end

class Tubestatus < Sinatra::Base
  def parse_xml_feed(feed_url)
    uri = URI(feed_url)
    conn = Faraday.new(:url => "#{uri.scheme}://#{uri.host}")
    response = conn.get(uri.request_uri)
    XmlSimple.xml_in response.body
  end

  get '/now.json' do
    feed_data = parse_xml_feed("http://cloud.tfl.gov.uk/TrackerNet/LineStatus")

    # Parse the XML into the appropriate structure for our app.
    data = feed_data["LineStatus"].map do |line|
      { :id => line["Line"].first["Name"].downcase.gsub(/[^a-z]+/, "-"),
        :name => line["Line"].first["Name"],
        :status => line["Status"].first["Description"].downcase,
        :messages => line["StatusDetails"].empty? ? [] : [line["StatusDetails"]] }
    end

    content_type :json
    JSON sort_lines(data)
  end

  get '/weekend.json' do
    feed_data = parse_xml_feed("http://www.tfl.gov.uk/tfl/businessandpartners/syndication/feed.aspx?email=#{ENV["TUBESTATUS_FEED_EMAIL"]}&feedId=1")

    # Parse the XML into the appropriate structure for our app.
    data = feed_data["Lines"].first["Line"].map do |line|
      messages = line["Status"].first["Message"].first["Text"]
      # Ensure messages is an empty array if there are no messages.
      if messages.first.is_a?(Hash)
        messages = []
      end

      name = weekend_line_mapping(line["Name"].first)

      { :id => name.downcase.gsub(/[^a-z]+/, "-"),
        :name => name,
        :status => line["Status"].first["Text"].first.downcase,
        :messages => messages }
    end

    content_type :json
    JSON sort_lines(data)
  end

  def weekend_line_mapping(name)
    mapping = { 'H\'smith & City' => 'Hammersmith and City',
                'Waterloo & City' => 'Waterloo and City' }
    mapping[name] || name
  end

  def sort_lines(lines)
    lines.sort { |x, y| x[:name] <=> y[:name] }
  end
end
