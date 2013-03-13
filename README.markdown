# Github Preview [![TravisCI](https://secure.travis-ci.org/kei-s/github-preview.png?branch=master)](http://travis-ci.org/kei-s/github-preview) [![Dependency Status](https://gemnasium.com/kei-s/github-preview.png)](https://gemnasium.com/kei-s/github-preview)

## App on CloudFoundry
[http://github-preview.cloudfoundry.com/](http://github-preview.cloudfoundry.com/)

## How to Deploy Cloudfoundry

    git clone git@github.com:morika-t/github-preview.git
    bundle install --path vendor/bundle
    vmc push deploy-app-name


## App on Heroku
[http://github-preview.herokuapp.com/](http://github-preview.herokuapp.com/)

## Preview script
Put this into your path at e.g. `~/bin/github-preview` and `chmod +x` it.<br/>
Then `github-preview someproject/Readme.markdown`


    #!/usr/bin/env ruby
    # open a given markdown file via github preview app
    raise "gime a file!!" unless ARGV[0]

    require 'cgi'
    content = File.read(ARGV[0])
    url = 'http://github-preview.herokuapp.com/'

    exec "open '#{url}/?text=#{CGI.escape content}&format=markdown'"

## Local development

    bundle
    bundle exec rspec spec
    bundle exec thin start
    open http://localhost:3000

## Copy to Clipboard
Using [ussy/clippy](https://github.com/ussy/clippy). Thanks a lot!
