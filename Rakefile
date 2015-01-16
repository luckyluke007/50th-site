require 'rake'
require 'net/http'

task :default => :fetch

# 'Fetch' task grabs events from the events calendar.
task :fetch do
    content = Net::HTTP.get(URI 'https://events.ucsc.edu/feed/270/data.json') # get the contents of the file
    File.open('./_data/events.json', 'w+') do |file|
      file.write(content) # write the contents
    end
    puts "Fetched events from calendar..."
    # system('jekyll build')
end

task :fetch do
content = Net::HTTP.get(URI 'https://events.ucsc.edu/feed/288/data.json') # get the contents of the file
    File.open('./_data/alumniweekend.json', 'w+') do |file|
      file.write(content) # write the contents
    end
    puts "Fetched events from calendar..."
    # system('jekyll build')
end