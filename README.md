# designory. Front End Developer - Take Home Test Boilerplate - React Version - Itzel Navarro

*  Code explanation:

To develop the project I decided to create separated components for each section. I was thinking it could be helpful in case that the project grows or needs to get implementation of dynamic information, so it will be easier to edit or modify each component.
Based on the above, I created a folder call "components" where there are: 

-Header (Header.js): 
    Contains logo and the render of Nav.js

-Nav (Nav.js):
    Contains navigation and state change for mobile menu and burger

-Banner (Banner.js):
    Contains the "call to action" that is shown at the beginning of the page

 Wrapper:
    This wrapper is not a component, it's just a container where I display the rest of the sections:

	-Articles (Articles.js):
        Contains 3 articles shown in grid
	
    -Info (Info.js):
        Contains the biggest article
	
    -Footer (Footer.js):
        Contains the phone number and copyright
    
Each component has its respective stylesheet in SASS (scss) including the responsive styles. The stylesheet name is similar than the component name, example: Header.js = Header.scss

In the case of the navigation, the file Nav.js doesn't have its own stylesheet because I created the styles as a styled-component so it can look and act different in desktop or mobile. It will be necessary to install the library using "npm install styled-components" in your terminal.