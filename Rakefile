require 'rake'
require 'net/http'
require 'html/proofer'

task :default => :fetch

# 'Fetch' task grabs event feeds from the events calendar.
task :fetch do
    feeds = {
      'events' => 'https://events.ucsc.edu/feed/270/data.json',
      'alumniweekend' => 'https://events.ucsc.edu/feed/288/data.json'        
    }

    feeds.each do |name, feed|
        # Get the contents of the file
        content = Net::HTTP.get(URI feed)
        # Create the data file
        File.open("./_data/#{name}.json", "w+") do |file|
          file.write(content) # write the contents
        end
        puts "Fetched events from calendar feed: #{name}"
    end
    system('bundle exec jekyll build')
end

# Test the build
desc "Build the site and test with HTML Proofer"
task :test do
  sh "bundle exec jekyll build"
  HTML::Proofer.new("./_site", {:disable_external => true}).run
  # TODO: sh "scss-lint"
end