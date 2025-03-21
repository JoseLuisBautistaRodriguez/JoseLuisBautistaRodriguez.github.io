# filepath: _plugins/generate_tags.rb
module Jekyll
  class TagPageGenerator < Generator
    safe true

    def generate(site)
      site.tags.each do |tag, posts|
        site.pages << TagPage.new(site, site.source, tag)
      end
    end
  end

  class TagPage < Page
    def initialize(site, base, tag)
      @site = site
      @base = base
      @dir  = "tags/#{tag.slugify}"
      @name = "index.html"

      self.process(@name)
      self.read_yaml(File.join(base, "_layouts"), "tag.html")
      self.data["tag"] = tag
      self.data["title"] = "Posts tagged with \"#{tag}\""
    end
  end
end