build:
	r.js -o public/javascripts/build.js
release:
	make build
	git add public/javascripts/main_compiled.js
	git commit -m "Compiled JS for release."
	git push heroku
