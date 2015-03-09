require 'bundler'

require 'dotenv'
Dotenv.load

require 'rack/cors'

use Rack::Cors do
  allow do
    origins ENV['CORS_ALLOW_ORIGINS']
    resource '*', headers: :any
  end
end

Bundler.setup
require './tubestatus'

run Tubestatus
