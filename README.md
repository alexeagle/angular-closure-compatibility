[![CircleCI](https://circleci.com/gh/alexeagle/angular-closure-compatibility.svg?style=svg)](https://circleci.com/gh/alexeagle/angular-closure-compatibility)

Prototype for a system that verifies compatibility of third-party libraries when used from an Angular/Closure compiler application.

The idea is for each compatible library to be indicated by adding a subdirectory in this repo, named the same as the npm package for the library.
This directory gives developers an example of how to include the library, getting the best optimizations possible.
It also provides a continuous integration to verify that the compatibility holds (and to inspect which version is compatible).
