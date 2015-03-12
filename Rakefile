require 'rake'
require 'net/http'

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