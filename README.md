# Bisq Network Documentation

AsciiDoc sources for the docs hosted at <https://docs.bisq.network>.

## New Contributors

Bisq's [decentralized governance structure][3] makes documentation especially important. If you're interested in contributing:

- Take a look at [existing docs][4] to get a feel for the general approach to format, tone, and detail
- Look through our [Contributor's Checklist][5] for a background on how we work and conventions (e.g., proper git commit messages)
- Correspond with existing contributors [on Keybase][6] to discuss your ideas or determine where help is most needed

## Build

To build locally, run `./gradlew build` (`gradlew.bat build --project-cache-dir=../cache` on Windows) and then open `build/asciidoc/html5/index.html` in your browser.

## Deploy

Commits pushed to the `master` branch of this repository are automatically built and deployed via Netlify at <https://app.netlify.com/sites/bisq-network-docs> (permission required).

## Writing Tips

 - Keep the [Asciidoctor user manual][1] handy as a reference when editing.
 - Install the [Asciidoctor.js Live Preview][2] Chrome extension for instant in-browser rendering of `.adoc` files. This avoids the need to run `gradle build` and then refresh your browser to see the results of your changes.

[1]: https://asciidoctor.org/docs/user-manual
[2]: https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei
[3]: https://docs.bisq.network/user-dao-intro.html
[4]: https://docs.bisq.network
[5]: https://docs.bisq.network/contributor-checklist.html
[6]: https://keybase.io/team/bisq
