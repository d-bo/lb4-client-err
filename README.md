# lb4-client-err

#### Environment

Linux Mint 20 Linux 5.4.0-52-generic x86-64
nodejs v10.21.0

```bash
git clone https://github.com/d-bo/lb4-client-err.git
cd lb4-client-err
npm i
npm test
```

#### Error output

```
> prj@1.0.0 pretest /home/bdo/prj/lb4-client-err
> npm run clean && npm run build


> prj@1.0.0 clean /home/bdo/prj/lb4-client-err
> lb-clean dist *.tsbuildinfo .eslintcache


> prj@1.0.0 build /home/bdo/prj/lb4-client-err
> lb-tsc --copy-resources


> prj@1.0.0 test /home/bdo/prj/lb4-client-err
> lb-mocha --allow-console-logs "dist/__tests__"



  HomePage
TEST CLIENT ERR Error: Cannot create client for PrjApplication, it is not listening.
    at Object.createRestAppClient (/home/bdo/prj/lb4-client-err/node_modules/@loopback/testlab/src/client.ts:38:11)
    at Object.setupApplication (/home/bdo/prj/lb4-client-err/src/__tests__/acceptance/test-helper.ts:18:14)
    at process._tickCallback (internal/process/next_tick.js:68:7)
Test server is running at http://[::1]:3000/api
    1) exposes a default home page
    2) exposes self-hosted explorer

  PingController
TEST CLIENT ERR Error: Cannot create client for PrjApplication, it is not listening.
    at Object.createRestAppClient (/home/bdo/prj/lb4-client-err/node_modules/@loopback/testlab/src/client.ts:38:11)
    at Object.setupApplication (/home/bdo/prj/lb4-client-err/src/__tests__/acceptance/test-helper.ts:18:14)
    at process._tickCallback (internal/process/next_tick.js:68:7)
Test server is running at http://[::1]:3000/api
    3) invokes GET /api/ping


  0 passing (154ms)
  3 failing

  1) HomePage
       exposes a default home page:
     TypeError: Cannot read property 'get' of undefined
      at Context.it (src/__tests__/acceptance/home-page.acceptance.ts:19:8)

  2) HomePage
       exposes self-hosted explorer:
     TypeError: Cannot read property 'get' of undefined
      at Context.it (src/__tests__/acceptance/home-page.acceptance.ts:26:8)

  3) PingController
       invokes GET /api/ping:
     TypeError: Cannot read property 'get' of undefined
      at Context.it (src/__tests__/acceptance/ping.controller.acceptance.ts:18:30)



npm ERR! Test failed.  See above for more details.
```
