# TCDSB Hackathon Demo Project

This is the demo project I made during the TCDSB Hackathon. It is mostly the default template project for Foundation for Apps, powered by Gulp, Angular, and libsass. It provides you with a basic template to get started with Foundation for Apps and Angular.

## Helpful Links

* [AngularJS tutorial](https://docs.angularjs.org/tutorial). This is what I was trying to get running in the morning. I still highly recommend trying to run through it, as you can learn a lot from it. Try intsalling it on your own computer if you have one? If you're on a Mac or Linux machine, even better.
* [Foundation For Apps](http://foundation.zurb.com/apps.html). This is what I got running in the afternoon, and what this git project is based off of.

## Requirements

You'll need the following software installed to get started.

  - [Node.js](http://nodejs.org): Use the installer for your OS.
  - [Git](http://git-scm.com/downloads): Use the installer for your OS.
    - Windows users can also try [Git for Windows](http://git-for-windows.github.io/).
  - [Gulp](http://gulpjs.com/) and [Bower](http://bower.io): Run `npm install -g gulp bower`
    - Depending on how Node is configured on your machine, you may need to run `sudo npm install -g gulp bower` instead, if you get an error with the first command.

## Get Started

Clone this repository, where `app` is the name of your app.

```bash
git clone https://github.com/mattgrande/tcdsb-hackathon.git
```

Change into the directory.

```bash
cd tcdsb-hackathon
```

Install the dependencies. If you're running Mac OS or Linux, you may need to run `sudo npm install` instead, depending on how your machine is configured.

```bash
npm install
bower install
```

While you're working on your project, run:

```bash
npm start
```

This will compile the Sass and assemble your Angular app. **Now go to `localhost:8080` in your browser to see it in action.** When you change any file in the `client` folder, the appropriate Gulp task will run to build new files.

**Please note:** The `build` directory gets created when you run `npm start`. It contains compiled code, generated from the stuff in the `client` directory. The `client` directory is where you want to do your work.

To run the compiling process once, without watching any files, use the `build` command.

```bash
npm start build
```

## If you have any problems

Create an issue on the repository [here](https://github.com/mattgrande/tcdsb-hackathon/issues), and let me know what problem you're having. I'll try and help you out, if I can. I may not get back to you quickly, but I *will* get back to you.
