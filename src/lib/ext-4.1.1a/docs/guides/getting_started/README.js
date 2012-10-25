Ext.data.JsonP.getting_started({"title":"Getting Started with Ext JS 4","guide":"<h1>Getting Started</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/getting_started-section-1'>1. Requirements</a></li>\n<li><a href='#!/guide/getting_started-section-2'>2. Application Structure</a></li>\n<li><a href='#!/guide/getting_started-section-3'>3. Deployment</a></li>\n<li><a href='#!/guide/getting_started-section-4'>4. Further Reading</a></li>\n</ol>\n</div>\n\n<h2 id='getting_started-section-1'>1. Requirements</h2>\n\n<h3>1.1 Web Browsers</h3>\n\n<p>Ext JS 4 supports all major web browsers, from Internet Explorer 6 to the latest version of Google Chrome. During development, however, we recommend that you choose one of the following browsers for the best debugging experience:</p>\n\n<ul>\n<li><a href=\"http://www.google.com/chrome/\">Google Chrome</a> 10+</li>\n<li><a href=\"http://www.apple.com/safari/download/\">Apple Safari</a> 5+</li>\n<li><a href=\"http://www.mozilla.com/en-US/firefox/fx/\">Mozilla Firefox</a> 4+ with the <a href=\"http://getfirebug.com/\">Firebug</a> Web Development Plugin</li>\n</ul>\n\n\n<p>This tutorial assumes you are using the latest version of Google Chrome.  If you don't already have Chrome take a moment to install it, and familiarize yourself with the <a href=\"http://code.google.com/chrome/devtools/docs/overview.html\">Chrome Developer Tools</a>.</p>\n\n<h3>1.2 Web Server</h3>\n\n<p>Even though a local web server is not a requirement to use Ext JS 4, it is still highly recommended that you develop with one, since <a href=\"http://en.wikipedia.org/wiki/XHR\">XHR</a> over local <a href=\"http://en.wikipedia.org/wiki/File_URI_scheme\">file:// protocol</a> has <a href=\"http://en.wikipedia.org/wiki/Same_origin_policy\">cross origin restriction</a> on most browsers.\nIf you don't already have a local web server it is recommended that you download and install Apache HTTP Server.</p>\n\n<ul>\n<li><a href=\"http://httpd.apache.org/docs/current/platform/windows.html\">Instructions for installing Apache on Windows</a></li>\n<li><a href=\"http://httpd.apache.org/docs/current/install.html\">Instructions for installing Apache on Linux</a></li>\n<li>Mac OS X comes with a build in apache installation which you can enable by navigating to \"System Preferences > Sharing\" and checking the box next to \"Web Sharing\".</li>\n</ul>\n\n\n<p>Once you have installed or enabled Apache you can verify that it is running by navigating to <a href=\"http://localhost/\">localhost</a> in your browser.  You should see a startup page indicating that Apache HTTP Server was installed successfully and is running.</p>\n\n<h3>1.3. Ext JS 4 SDK</h3>\n\n<p>Download <a href=\"http://www.sencha.com/products/extjs/\">Ext JS 4 SDK</a>. Unzip the package to a new directory called \"extjs\" within your web root directory.  If you aren't sure where your web root directory is, consult the docs for your web server.\nYour web root directory may vary depending on your operating system, but if you are using Apache it is typically located at:</p>\n\n<ul>\n<li>Windows - \"C:\\Program Files\\Apache Software Foundation\\Apache2.2\\htdocs\"</li>\n<li>Linux - \"/var/www/\"</li>\n<li>Mac OS X - \"/Library/WebServer/Documents/\"</li>\n</ul>\n\n\n<p>Once you have finished installing Apache navigate to <a href=\"http://localhost/extjs/index.html\">http://localhost/extjs/index.html</a> in your browser. If an Ext JS 4 welcome page appears, you are all set.</p>\n\n<h2 id='getting_started-section-2'>2. Application Structure</h2>\n\n<h3>2.1 Basic Structure</h3>\n\n<p>Although not mandatory, all suggestions listed below should be considered as best-practice guidelines to keep your application well organized, extensible and maintainable.\nThe following is the recommended directory structure for an Ext JS application:</p>\n\n<pre><code>- appname\n    - app\n        - namespace\n            - Class1.js\n            - Class2.js\n            - ...\n    - extjs\n    - resources\n        - css\n        - images\n        - ...\n    - app.js\n    - index.html\n</code></pre>\n\n<ul>\n<li><code>appname</code> is a directory that contains all your application's source files</li>\n<li><code>app</code> contains all your classes, the naming style of which should follow the convention listed in the <a href=\"#/guide/class_system\">Class System</a> guide</li>\n<li><code>extjs</code> contains the Ext JS 4 SDK files</li>\n<li><code>resources</code> contains additional CSS and image files which are responsible for the look and feel of the application, as well as other static resources (XML, JSON, etc.)</li>\n<li><code>index.html</code> is the entry-point HTML document</li>\n<li><code>app.js</code> contains your application's logic</li>\n</ul>\n\n\n<p>Don't worry about creating all those directories at the moment.  For now lets just focus on creating the minimum amount of code necessary to get an Ext JS application up and running.\nTo do this we'll create a basic \"hello world\" Ext JS application called \"Hello Ext\".  First, create the following directory and files in your web root directory.</p>\n\n<pre><code>- helloext\n    - app.js\n    - index.html\n</code></pre>\n\n<p>Then unzip the Ext JS 4 SDK to a directory named <code>extjs</code> in the <code>helloext</code> directory</p>\n\n<p>A typical Ext JS application is contained in a single HTML document - <code>index.html</code>.  Open <code>index.html</code> and insert the following html code:</p>\n\n<pre><code>&lt;html&gt;\n&lt;head&gt;\n    &lt;title&gt;Hello Ext&lt;/title&gt;\n\n    &lt;link rel=\"stylesheet\" type=\"text/css\" href=\"extjs/resources/css/ext-all.css\"&gt;\n    &lt;script type=\"text/javascript\" src=\"extjs/ext-debug.js\"&gt;&lt;/script&gt;\n    &lt;script type=\"text/javascript\" src=\"app.js\"&gt;&lt;/script&gt;\n&lt;/head&gt;\n&lt;body&gt;&lt;/body&gt;\n&lt;/html&gt;\n</code></pre>\n\n<ul>\n<li><code>extjs/resources/css/ext-all.css</code> contains all styling information needed for the whole framework</li>\n<li><code>extjs/ext-debug.js</code> contains a minimal set of Ext JS 4 Core library classes</li>\n<li><code>app.js</code> will contain your application code</li>\n</ul>\n\n\n<p>Now you're ready to write your application code. Open <code>app.js</code> and insert the following JavaScript code:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-application\" rel=\"Ext-method-application\" class=\"docClass\">Ext.application</a>({\n    name: 'HelloExt',\n    launch: function() {\n        <a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a>('<a href=\"#!/api/Ext.container.Viewport\" rel=\"Ext.container.Viewport\" class=\"docClass\">Ext.container.Viewport</a>', {\n            layout: 'fit',\n            items: [\n                {\n                    title: 'Hello Ext',\n                    html : 'Hello! Welcome to Ext JS.'\n                }\n            ]\n        });\n    }\n});\n</code></pre>\n\n<p>Now open your browser and navigate to <a href=\"http://localhost/helloext/index.html\">http://localhost/helloext/index.html</a>. You should see a panel with a title bar containing the text \"Hello Ext\" and the \"welcome\" message in the panel's body area.</p>\n\n<h3>2.2 Dynamic Loading</h3>\n\n<p>Open the Chrome Developer Tools and click on the Console option.  Now refresh the Hello Ext application.  You should see a warning in the console that looks like this:</p>\n\n<p><p><img src=\"guides/getting_started/loader-warning-viewport.png\" alt=\"testing\"></p></p>\n\n<p>Ext JS 4 comes with a system for dynamically loading only the JavaScript resources necessary to run your app.\nIn our example <code><a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a></code> creates an instance of <code><a href=\"#!/api/Ext.container.Viewport\" rel=\"Ext.container.Viewport\" class=\"docClass\">Ext.container.Viewport</a></code>.  When <code><a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a></code> is called the loader will first check to see if <code><a href=\"#!/api/Ext.container.Viewport\" rel=\"Ext.container.Viewport\" class=\"docClass\">Ext.container.Viewport</a></code> has been defined.\nIf it is undefined the loader will try to load the JavaScript file that contains the code for <code><a href=\"#!/api/Ext.container.Viewport\" rel=\"Ext.container.Viewport\" class=\"docClass\">Ext.container.Viewport</a></code> before instantiating the viewport object.  In our example the <code>Viewport.js</code> file gets loaded successfully, but the loader detects\nthat files are being loaded in a less-than optimal manner.  Since we are loading the <code>Viewport.js</code> file only when an instance of <code><a href=\"#!/api/Ext.container.Viewport\" rel=\"Ext.container.Viewport\" class=\"docClass\">Ext.container.Viewport</a></code> is requested, execution of the code is stopped until that file has been loaded successfully, causing a short delay.\nThis delay would be compounded if we had several calls to <a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a>,  because the application would wait for each file to load before requesting the next one.</p>\n\n<p>To fix this, we can add this one line of code above the call to <code><a href=\"#!/api/Ext-method-application\" rel=\"Ext-method-application\" class=\"docClass\">Ext.application</a></code>:</p>\n\n<p><code><a href=\"#!/api/Ext-method-require\" rel=\"Ext-method-require\" class=\"docClass\">Ext.require</a>('<a href=\"#!/api/Ext.container.Viewport\" rel=\"Ext.container.Viewport\" class=\"docClass\">Ext.container.Viewport</a>');</code></p>\n\n<p>This will ensure that the file containing the code for <code><a href=\"#!/api/Ext.container.Viewport\" rel=\"Ext.container.Viewport\" class=\"docClass\">Ext.container.Viewport</a></code> is loaded before the application runs.  You should no longer see the <code><a href=\"#!/api/Ext.Loader\" rel=\"Ext.Loader\" class=\"docClass\">Ext.Loader</a></code> warning when you refresh the page.</p>\n\n<h3>2.3 Library Inclusion methods</h3>\n\n<p>When you unzip the Ext JS 4 download, you will see the following files:</p>\n\n<ol>\n<li><p><code>ext-debug.js</code> - This file is only for use during development.  It provides the minimum number of core Ext JS classes needed to get up and running.  Any additional classes should be dynamically loaded as separate files as demonstrated above.</p></li>\n<li><p><code>ext.js</code> - same as <code>ext-debug.js</code> but minified for use in production.  Meant to be used in combination with your application's <code>app-all.js</code> file. (see section <em>3</em>)</p></li>\n<li><p><code>ext-all-debug.js</code> - This file contains the entire Ext JS library.  This can be helpful for shortening your initial learning curve, however <code>ext-debug.js</code> is preferred in most cases for actual application development.</p></li>\n<li><p><code>ext-all.js</code> - This is a minified version of <code>ext-all-debug.js</code> that can be used in production environments, however, it is not recommended since most applications will not make use of all the classes that it contains.  Instead it is recommended that you create a custom build for your production environment as described in section <em>3</em>.</p></li>\n</ol>\n\n\n<h2 id='getting_started-section-3'>3. Deployment</h2>\n\n<p>The newly-introduced Sencha SDK Tools (<a href=\"http://www.sencha.com/products/extjs/\">download here</a>) makes deployment of any Ext JS 4 application easier than ever. The tools allow you to generate a manifest of all JavaScript dependencies in the form of a JSB3 (JSBuilder file format) file, and create a custom build containing only the code that your application needs.</p>\n\n<p>Once you've installed the SDK Tools, open a terminal window and navigate into your application's directory.</p>\n\n<pre><code>cd path/to/web/root/helloext\n</code></pre>\n\n<p>From here you only need to run a couple of simple commands. The first one generates a JSB3 file:</p>\n\n<pre><code>sencha create jsb -a index.html -p app.jsb3\n</code></pre>\n\n<p>For applications built on top of a dynamic server-side language like PHP, Ruby, ASP, etc., you can simply replace <code>index.html</code> with the actual URL of your application:</p>\n\n<pre><code>sencha create jsb -a http://localhost/helloext/index.html -p app.jsb3\n</code></pre>\n\n<p>This scans your <code>index.html</code> file for all framework and application files that are actually used by the app, and then creates a JSB file called <code>app.jsb3</code>. Generating the JSB3 first gives us a chance to modify the generated <code>app.jsb3</code> before building - this can be helpful if you have custom resources to copy, but in most cases we can immediately proceed to build the application with the second command:</p>\n\n<pre><code>sencha build -p app.jsb3 -d .\n</code></pre>\n\n<p>This creates 2 files based on the JSB3 file:</p>\n\n<ol>\n<li><p><code>all-classes.js</code> - This file contains all of your application's classes. It is not minified so is very useful for debugging problems with your built application.  In our example this file is empty because our \"Hello Ext\" application does not contain any classes.</p></li>\n<li><p><code>app-all.js</code> - This file is a minimized build of your application plus all of the Ext JS classes required to run it. It is the minified and production-ready version of <code>all-classes.js + app.js</code>.</p></li>\n</ol>\n\n\n<p>An Ext JS application will need a separate <code>index.html</code> for the production version of the app.  You will typically handle this in your build process or server side logic, but for now let's just create a new file in the <code>helloext</code> directory called <code>index-prod.html</code>:</p>\n\n<pre><code>&lt;html&gt;\n&lt;head&gt;\n    &lt;title&gt;Hello Ext&lt;/title&gt;\n\n    &lt;link rel=\"stylesheet\" type=\"text/css\" href=\"extjs/resources/css/ext-all.css\"&gt;\n    &lt;script type=\"text/javascript\" src=\"extjs/ext.js\"&gt;&lt;/script&gt;\n    &lt;script type=\"text/javascript\" src=\"app-all.js\"&gt;&lt;/script&gt;\n&lt;/head&gt;\n&lt;body&gt;&lt;/body&gt;\n&lt;/html&gt;\n</code></pre>\n\n<p>Notice that <code>ext-debug.js</code> has been replaced with <code>ext.js</code>, and <code>app.js</code> has been replaced with <code>app-all.js</code>. If you navigate to <a href=\"http://localhost/helloext/index-prod.html\">http://localhost/helloext/index-prod.html</a> in your browser, you should see the production version of the \"Hello Ext\" application.</p>\n\n<h2 id='getting_started-section-4'>4. Further Reading</h2>\n\n<ol>\n<li><a href=\"#/guide/class_system\">Class System</a></li>\n<li><a href=\"#/guide/application_architecture\">MVC Application Architecture</a></li>\n<li><a href=\"#/guide/layouts_and_containers\">Layouts and Containsers</a></li>\n<li><a href=\"#/guide/data\">Working with Data</a></li>\n</ol>\n\n"});