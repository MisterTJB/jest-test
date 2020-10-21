# Testing the Jesting

This repo is a proof-of-concept for testing plain HTML using Jest.

## Method

See comments in `secret-sauce.js`; there's some more explanation here:

Jest ships with a library called [jsdom](https://github.com/jsdom/jsdom), which is a JavaScript implementation of the DOM that purports to "... emulate enough of a subset of a web browser to be useful for testing... real-world web applications".

jsdom effectively allows you to do things like `document.querySelector('.my-class')` outside of a browser (e.g. in Node.js) by mimicking the DOM APIs.

In this proof-of-concept, I just read in the `index.html` as plain utf text using the regular ol' Node.js `fs` library, then set that text to the `innerHTML` of a jsdom 'document' that Jest injects into the module (named, conveniently, `document`).

I've bundled it all into a module to keep the test code focused on testing and not boilerplate.

## Why doesn't it work?

- Did you `npm install`?
- Did you `npm run test`?
- The watcher is being too helpful and knows that files haven't changed since the last commit. Press 'a' to run all tests

## Why are tests failing?

Because you need to implement that `<marquee>` tag for full marks!

## Attribution

I stole the solution from [this guy](https://dev.to/snowleo208/things-i-learned-after-writing-tests-for-js-and-html-page-4lja) and made it less WTF.