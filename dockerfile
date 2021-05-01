FROM ruby:2.7.0-slim


RUN apt update -qq
RUN apt install -y \
        build-essential \
        libpq-dev \
        postgresql \
        sqlite3

WORKDIR /app


ADD Gemfile /app/Gemfile
ADD Gemfile.lock /app/Gemfile.lock
RUN gem install bundler:2.2.16 && \
    bundle install --path vendor/bundle

ADD ./ /app


