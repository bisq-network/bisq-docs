# Bisq Network Documentation

AsciiDoc sources for the docs hosted at <https://docs.bisq.network>.

## Build

To build locally, run `./gradlew build` (`gradlew.bat build --project-cache-dir=../cache` on Windows) and then open `build/asciidoc/html5/index.html` in your browser.

## Deploy

Commits pushed to the `master` branch of this repository are automatically built and deployed via Netlify at <https://app.netlify.com/sites/bisq-network-docs> (permission required).

## Writing Tips

 - Keep the [Asciidoctor user manual][1] handy as a reference when editing.
 - Install the [Asciidoctor.js Live Preview][2] Chrome extension for instant in-browser rendering of `.adoc` files. This avoids the need to run `gradle build` and then refresh your browser to see the results of your changes.

[1]: https://asciidoctor.org/docs/user-manual
[2]: https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei
