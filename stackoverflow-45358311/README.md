# How to share Mocha tests between different user contexts

> [Answers](https://stackoverflow.com/questions/45358311/how-to-appropriately-reuse-the-describe-blocks-of-mocha-tests/45386393?noredirect=1#comment97535076_45386393) how to share tests that are parameterizable

Output from running `npm t`
```
> stackoverflow-45358311@1.0.0 test /Users/carlerik/dev/forum-support-code/stackoverflow-45358311
> mocha client-test.js



  tests for user1
    ✓ should check something unique for user1
    reusable tests with different user objects
      ✓ should have a name

  tests for user2
    ✓ should check something unique for user2
    reusable tests with different user objects
      ✓ should have a name


  4 passing (7ms)
```
