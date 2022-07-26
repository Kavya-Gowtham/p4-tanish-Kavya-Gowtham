The browser's main functionality #
The main function of a browser is to present the web resource you choose, by requesting it from the server and displaying it in the browser window. The resource is usually an HTML document, but may also be a PDF, image, or some other type of content. The location of the resource is specified by the user using a URI (Uniform Resource Identifier)

URL: stands for Uniform Resource Locator. URL is the address of the website which you can find in the address bar of your web browser. It is a reference to a resource on the internet, be it images, hypertext pages, audio/video files, etc.

Example :

https://www.pesto.tech/

DNS: DNS is short for Domain Name System. Like a phonebook, DNS maintains and maps the name of the website, i.e. URL, and particular IP address it links to. Every URL on the internet has a unique IP address which is of the computer which hosts the server of the website requested.

When user enters an URL in the browser, the below steps will happen.

1. First browser checks cache for DNS entry to find the corresponding IP address of website.It looks for following cache. If not found in one, then continues checking to the next until found.
   - Browser Cache
   - Operating Systems Cache
   - Router Cache
   - ISP Cache
2. If not found in cache, ISP’s (Internet Service Provider) DNS server initiates a DNS query to find IP address of server that hosts the domain name.
3. The requests are sent using small data packets that contain information content of request and IP address it is destined for.
4. Browser initiates a TCP (Transfer Control Protocol) connection with the server using synchronize(SYN) and acknowledge(ACK) messages.
5. Browser sends an HTTP request to the web server. GET or POST request.
6. Server on the host computer handles that request and sends back a response. It assembles a response in some format like JSON, XML and HTML.
7. Server sends out an HTTP response along with the status of response.
8. Browser displays HTML content


Browser's high level components #

1. The user interface:
   This includes the address bar, back/forward button, bookmarking menu, etc. Every part of the browser display except the window where you see the requested page.
2. The browser engine:
   Used to marshals actions between the UI and the rendering engine.
3. The rendering engine:
   Responsible for displaying requested content. For example if the requested content is HTML, the rendering engine parses HTML and CSS, and displays the parsed content on the screen.
4. Networking:
   Used for network calls such as HTTP requests, using different implementations for different platform behind a platform-independent interface.
5. UI backend:
   used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform specific. Underneath it uses operating system user interface methods.
6. JavaScript interpreter:
   Used to parse and execute JavaScript code.
7. Data storage:
   This is a persistence layer. The browser may need to save all sorts of data locally, such as cookies. Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.
   
 Diagramatic flow of high level components of browser.  
   
   ![high level components](https://user-images.githubusercontent.com/62173639/180936385-eb7a4463-7481-4a53-960f-0cebeee733e9.png)

When the browser gets the response from server successfully, The rendering engine will start getting the content of requested document from the networking layer.

HTML PARSING
Once the data is received, the rendering engine starts parsing the HTML document and converts elements into DOM nodes in a tree called Content tree, The content tree contains all the HTML dom elements linking to the parent, child elements from root.
for example

<html>
<head>
<title>Welcome</title>
</head>
<body>
<div>
<p>Hello</p>
</div>
<p>Good morning</p>
</body>
</html>

CSS PARSING
The style information along with visual effects both in external css files and inline style elements are also parsed in the HTML using rendering engine called CSSOM.

    The combination of both DOM and CSSOM forms an render tree, which captures all the visible DOM content on the page and all the CSSOM style information for each node.

Layout computes the exact position and size of each object.

And last phase is paint,which takes in the final render tree and renders the pixels to the screen.

![HTML Parsing](https://user-images.githubusercontent.com/62173639/180752620-5991a1f5-94dd-4390-ad62-a477aaf60d3b.png)
![CSS parser](https://user-images.githubusercontent.com/62173639/180755315-6365dcbd-5b5a-48cb-aedd-ba6a04c61314.png)
![render tree](https://user-images.githubusercontent.com/62173639/180934797-90132ad7-863e-4f93-94e3-f61afaeb5ed4.png)


To construct the render tree, the browser roughly does the following:

1. Starting at the root of the DOM tree, traverse each visible node.

2. Some nodes are not visible (for example, script tags, meta tags, and so on), and are omitted since they are not reflected in the rendered output.
3. Some nodes are hidden via CSS and are also omitted from the render tree; for example, the span node---in the example above---is missing from the render tree because we have an explicit rule that sets the "display: none" property on it.
4. For each visible node, find the appropriate matching CSSOM rules and apply them.

5.Emit visible nodes with content and their computed styles.


SCRIPT PARSING
The script processor executes Javascript code to process an event. The processor uses a pure Go implementation of ECMAScript 5.1 and has no external dependencies. This can be useful in situations where one of the other processors doesn’t provide the functionality you need to filter events.
The processor can be configured by embedding Javascript in your configuration file or by pointing the processor at external file(s).
Example:
This loads the filter.js from the disk
processors:

- script:
  lang: javascript
  file: ${path.config}/filter.js

  For better user experience, the rendering engine will try to display contents on the screen as soon as possible. It will not wait until all HTML is parsed before starting to build and layout the render tree. Parts of the content will be parsed and displayed, while the process continues with the rest of the contents that keeps coming from the network.
