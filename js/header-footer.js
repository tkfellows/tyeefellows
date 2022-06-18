function setAttributes(element, attributes) {
    Object.keys(attributes).forEach(attr => {
      element.setAttribute(attr, attributes[attr]);
    });
  }
  
function getNavbarHeader() {
    let navbarDiv = document.getElementById("navbar-header");

    var navBar = document.createElement("nav");
    const navBarAttributes = {
        class: "navbar navbar-expand-lg navbar-light",
        style: "background-color: #e3f2fd;"
    };
    setAttributes(navBar, navBarAttributes);

    var navBarContainer = document.createElement("div");
    navBarContainer.setAttribute("class","container-lg");

    var navBarMainLogo = document.createElement("a");
    const navBarMainLogoAttributes = {
        class: "navbar-brand text-black fs-3",
        href: "http://tyeefellows.com/index.html"
    };
    setAttributes(navBarMainLogo, navBarMainLogoAttributes);
    navBarMainLogo.innerHTML = `
        <svg
            id="main-logo"
            width="64"
            height="64"
            viewBox="0 0 12 11"
            xmlns="http://www.w3.org/2000/svg">
            <title>Home</title>
            <g
                id="heart-ecg-group"
                transform="matrix(0.58370756,0,0,0.66147612,-0.40626343,5.3648453)"
                >
                <path
                    id="heart"
                    d="m 4.1778986,1.6821692 c 0.6819226,0.9054484 1.1786566,1.4344211 2.2410591,2.3139001 m 2.5338434,1.874943 C 9.2853783,6.1079416 9.5196663,6.2755009 9.8756648,6.510807 12.624224,4.6940776 14.200775,3.3638094 15.445969,1.7515195 m 1.302875,-1.89974509 0.354535,-0.60826304 c 3.256574,-6.22551197 -3.691603,-9.47803437 -7.05456,-6.38103937 -0.059883,0.05351 -0.1176452,0.1093471 -0.1731542,0.167382 -0.05615,-0.05812 -0.115974,-0.113204 -0.175077,-0.167382 -0.84074,-0.774002 -1.89219,-1.12916 -2.9455311,-1.127421 -3.160024,0.0052 -6.44571315,3.0129734 -4.0040212,7.68210736 l 0.1661853,0.30483645"
                    style="opacity:1;fill:none;fill-opacity:1;fill-rule:nonzero;stroke:#00000f;stroke-width:0.746;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
                    transform="translate(-0.05084201,0.58961957)" 
                    />
                <path
                    id="ecg" 
                    style="fill:none;fill-opacity:1;stroke:#d2000f;stroke-width:0.480964;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
                    d="m 0.93670493,1.3232841 0.37438177,-0.015055 0.65392,-0.020073 0.7088294,-0.020073 0.4742168,-0.020073 0.4592417,-0.010033 0.3044971,0.015055 0.3594064,0.095348 0.2795384,0.095348 0.2246291,0.1555666 0.324464,0.2408773 0.329456,0.1856763 0.2595713,0.1154207 0.3094889,0.070252 0.2246289,-0.010037 0.104827,-0.125457 0.069885,-0.3562978 0.049918,-0.4064804 0.069885,-0.43659024 0.024959,-0.63732121 0.024958,-0.81296099 0.099835,-1.04380176 0.109818,-1.1993685 0.1846949,-1.4753735 0.1996703,-2.0625122 0.1801395,2.9677218 0.023782,0.812961 0.015704,1.2777412 v 1.37500806 l -0.005,1.20438664 -0.014976,1.6309403 V 3.9779531 L 7.3910457,5.2375408 7.4359716,6.2662874 7.6456253,8.2786177 7.9900564,6.2211232 8.039974,5.2977601 8.0948834,4.3643604 8.204702,3.5865275 8.3195124,3.0596082 8.4193475,2.7735665 8.5890672,2.4875246 8.7587869,2.2667204 8.9734325,2.0559527 9.1780944,1.9104226 9.4077152,1.7849657 9.6922454,1.7096915 10.036677,1.664527 l 0.289521,-0.065238 0.284531,-0.1104022 0.264563,-0.1455299 0.22962,-0.2358592 0.149753,-0.21076763 0.25458,-0.50182777 0.239604,-0.42655355 0.264563,-0.45164499 0.239604,-0.45666334 0.199671,-0.41651702 0.124793,-0.3412429 0.174712,-0.3261881 0.214645,-0.1605849 0.08985,-0.065237 0.114811,0.015055 0.219637,0.2057495 0.204663,0.3312063 0.229621,0.4666998 0.184694,0.4767364 0.184696,0.4354493 0.144761,0.38754825 0.164727,0.36633421 0.194679,0.25091389 0.174712,0.19069455 0.19967,0.1957129 0.239605,0.1605849 0.184694,0.065237 0.244596,0.055201 0.364398,0.035128 0.439274,0.025091 0.504169,0.030109 0.434282,-0.00502 0.354415,-0.020073 0.494184,-0.055201 0.534118,-0.045164 0.628961,-0.025091 0.648929,0.020073 0.454248,-0.00502 0.349424,-0.00502 h 0.06489"
                    transform="translate(0,0.1)" 
                    />
                <circle 
                    id="beat"
                    style="fill:#d2000f"
                    cx="0.214rem" 
                    cy="0.084rem" 
                    r="0.48"/>
            </g>
        </svg>
        `
    
    var navBarButton = document.createElement("button");
    const navBarButtonAttributes = {
        "class": "navbar-toggler collapsed",
        "type": "button",
        "data-bs-toggle": "collapse",
        "data-bs-target": "#navbarSupportedContent",
        "aria-controls": "navbarSupportedContent",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation"        
    }
    setAttributes(navBarButton,navBarButtonAttributes);
    var navBarSpan = document.createElement("span");
    navBarSpan.setAttribute("class","navbar-toggler-icon");
    navBarButton.appendChild(navBarSpan);

    var navBarContent = document.createElement("div");
    const navBarContentAttributes = {
        class: "navbar-collapse collapse",
        id: "navbarSupportedContent"
    }
    setAttributes(navBarContent, navBarContentAttributes);

    var navBarContentList = document.createElement("ul");
    navBarContentList.setAttribute("class","navbar-nav me-auto mb-2 mb-lg-0");

    navBarContentList.innerHTML = 
    `
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="http://tyeefellows.com/about-me.html">About me</a></li>
            <li><a class="dropdown-item" href="http://tyeefellows.com/documents/Fellows_CV.pdf" download="Fellows_CV.pdf">CV</a></li>
        </ul>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="http://tyeefellows.com/research.html">Research</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="http://tyeefellows.com/publications.html">Publications</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="http://tyeefellows.com/media.html">Media</a>
    </li>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Hobbies
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="http://tyeefellows.com/hobbies/coding-projects.html">Coding</a></li>
            <li><a class="dropdown-item" href="http://tyeefellows.com/hobbies/climbing.html">Climbing</a></li>
            <li><a class="dropdown-item" href="http://tyeefellows.com/hobbies/photography.html">Photography</a></li>
        </ul>
    </li>
    `;

    navBarContent.appendChild(navBarContentList);
    navBarContainer.appendChild(navBarMainLogo);
    navBarContainer.appendChild(navBarButton);
    navBarContainer.appendChild(navBarContent);
    navBar.appendChild(navBarContainer);
    navbarDiv.appendChild(navBar);
};
getNavbarHeader();

function getNavbarFooter() {
    let navbarFooter = document.getElementById("navbar-footer");
    navbarFooter.setAttribute("class","container");
    navbarFooter.innerHTML=
    `
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div class="col-md-4 d-flex align-items-center">
        <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            <svg class="bi" width="30" height="24"><use xlink:href="http://tyeefellows.com/aboue-me.html"></use></svg>
        </a>
        <span class="mb-3 mb-md-0 text-muted">Created by Tyee Fellows © 2022 </span>
        </div>

        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
        <!-- <li class="ms-3">
            <a class="text-muted" href="https://twitter.com/FellowsTyee?lang=en">
                <i class="bi bi-twitter"></i>                
            </a>
        </li> -->
        <li class="ms-3">
            <a href="mailto:tyee.fellows@medportal.ca" class="text-muted">
                <i title="Email" class="bi bi-envelope-fill"></i>
            </a>
        </li>
        <li class="ms-3">
            <a href="https://ca.linkedin.com/in/tyee-fellows-9678a1185" class="text-muted">
                <i title="LinkedIn" class="bi bi-linkedin"></i>
            </a>
        </li>
        <li class="ms-3">
            <a href="https://www.researchgate.net/profile/Tyee-Fellows-2">
                <svg class="pb-1" width="20" height="20" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 32 32" >
                <title>Research Gate</title>
                <defs>
                    <style type="text/css">
                        <![CDATA[
                        .fil0 {fill:grey;fill-rule:nonzero}
                        .fil1 {fill:white;fill-rule:nonzero}
                        ]]>
                    </style>
                </defs>
                <g id="Capa_x0020_1">
                    <path class="fil0" d="M32.04 15.97c0,8.85 -7.18,16.03 -16.02,16.03 -8.85,0 -16.02,-7.18 -16.02,-16.03 0,-8.85 7.17,-16.03 16.02,-16.03 8.84,0 16.02,7.18 16.02,16.03zm-14.79 7c-1.43,-0.28 -2.28,-1.11 -4.45,-4.33 -0.72,-1.08 -0.72,-1.08 -1.42,-1.13 -1.03,-0.07 -0.95,-0.25 -0.92,2.02 0.04,2.58 0.01,2.52 1.5,2.77 0.39,0.06 0.42,0.09 0.42,0.32 0,0.26 0,0.26 -2.62,0.28 -2.46,0.02 -2.62,0.01 -2.67,-0.14 -0.1,-0.29 0.05,-0.43 0.59,-0.53 0.61,-0.11 0.93,-0.36 1.01,-0.78 0.04,-0.16 0.05,-2.32 0.03,-4.8 -0.03,-5.21 0.03,-4.9 -0.93,-5.11 -0.6,-0.13 -0.79,-0.27 -0.71,-0.51 0.06,-0.16 0.19,-0.17 2.92,-0.22 4.06,-0.08 4.82,0.05 5.9,1.01 1.13,1.01 1.29,2.55 0.39,3.84 -0.4,0.58 -1.2,1.2 -1.82,1.43 -0.29,0.11 -0.53,0.23 -0.53,0.27 0,0.12 0.92,1.43 1.49,2.13 1.52,1.85 2.34,2.57 3.19,2.79 0.53,0.14 0.68,0.29 0.53,0.55 -0.16,0.27 -0.96,0.33 -1.9,0.14zm-3.83 -6.63c2,-0.82 2.15,-3.57 0.25,-4.38 -0.49,-0.21 -0.62,-0.22 -1.85,-0.22 -1.33,0 -1.33,0 -1.35,2.31 -0.02,1.27 -0.01,2.37 0.02,2.43 0.09,0.21 2.34,0.1 2.93,-0.14zm6.97 -2.85c-1.55,-0.29 -2.06,-1.24 -1.98,-3.68 0.04,-1.35 0.15,-1.72 0.67,-2.28 0.92,-0.99 3.2,-0.9 4.04,0.16 0.36,0.45 0.33,0.59 -0.17,0.74 -0.39,0.13 -0.39,0.13 -0.75,-0.23 -0.85,-0.82 -2.32,-0.52 -2.58,0.54 -0.13,0.47 -0.12,2.46 0.01,2.91 0.35,1.27 2.46,1.27 2.82,0 0.22,-0.81 0.17,-0.87 -0.8,-0.92 -0.47,-0.02 -0.47,-0.02 -0.47,-0.41 0,-0.38 0,-0.38 1.12,-0.41 1.45,-0.03 1.43,-0.05 1.36,1.01 -0.09,1.33 -0.45,1.97 -1.32,2.35 -0.57,0.24 -1.35,0.33 -1.95,0.22z"/>
                    <path class="fil1" d="M17.25 22.97c-1.43,-0.28 -2.28,-1.11 -4.45,-4.33 -0.72,-1.08 -0.72,-1.08 -1.42,-1.13 -1.03,-0.07 -0.95,-0.25 -0.92,2.02 0.04,2.58 0.01,2.52 1.5,2.77 0.39,0.06 0.42,0.09 0.42,0.32 0,0.26 0,0.26 -2.62,0.28 -2.46,0.02 -2.62,0.01 -2.67,-0.14 -0.1,-0.29 0.05,-0.43 0.59,-0.53 0.61,-0.11 0.93,-0.36 1.01,-0.78 0.04,-0.16 0.05,-2.32 0.03,-4.8 -0.03,-5.21 0.03,-4.9 -0.93,-5.11 -0.6,-0.13 -0.79,-0.27 -0.71,-0.51 0.06,-0.16 0.19,-0.17 2.92,-0.22 4.06,-0.08 4.82,0.05 5.9,1.01 1.13,1.01 1.29,2.55 0.39,3.84 -0.4,0.58 -1.2,1.2 -1.82,1.43 -0.29,0.11 -0.53,0.23 -0.53,0.27 0,0.12 0.92,1.43 1.49,2.13 1.52,1.85 2.34,2.57 3.19,2.79 0.53,0.14 0.68,0.29 0.53,0.55 -0.16,0.27 -0.96,0.33 -1.9,0.14zm-3.83 -6.63c2,-0.82 2.15,-3.57 0.25,-4.38 -0.49,-0.21 -0.62,-0.22 -1.85,-0.22 -1.33,0 -1.33,0 -1.35,2.31 -0.02,1.27 -0.01,2.37 0.02,2.43 0.09,0.21 2.34,0.1 2.93,-0.14zm6.97 -2.85c-1.55,-0.29 -2.06,-1.24 -1.98,-3.68 0.04,-1.35 0.15,-1.72 0.67,-2.28 0.92,-0.99 3.2,-0.9 4.04,0.16 0.36,0.45 0.33,0.59 -0.17,0.74 -0.39,0.13 -0.39,0.13 -0.75,-0.23 -0.85,-0.82 -2.32,-0.52 -2.58,0.54 -0.13,0.47 -0.12,2.46 0.01,2.91 0.35,1.27 2.46,1.27 2.82,0 0.22,-0.81 0.17,-0.87 -0.8,-0.92 -0.47,-0.02 -0.47,-0.02 -0.47,-0.41 0,-0.38 0,-0.38 1.12,-0.41 1.45,-0.03 1.43,-0.05 1.36,1.01 -0.09,1.33 -0.45,1.97 -1.32,2.35 -0.57,0.24 -1.35,0.33 -1.95,0.22zm0 0z"/>
                </g>
            </svg>
            </a>
        </li>

        <li class="ms-3">
            <a href="https://orcid.org/0000-0003-2656-8537">
                <svg id="orc-id-icon" width="20px" height="20px" class="pb-1" viewBox="0 0 72 72"
                    <title>Orcid logo</title>
                    <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="hero" transform="translate(-924, -72)" fill-rule="nonzero">
                            <g id="Group-4">
                                <g id="vector_iD_icon" transform="translate(924.000000, 72.000000)">
                                    <path d="M72,36 C72,55.884375 55.884375,72 36,72 C16.115625,72 0,55.884375 0,36 C0,16.115625 16.115625,0 36,0 C55.884375,0 72,16.115625 72,36 Z" id="Path" fill="gray"></path>
                                    <g id="Group" transform="translate(18.868966, 12.910345)" fill="#FFFFFF">
                                        <polygon id="Path" points="5.03734929 39.1250878 0.695429861 39.1250878 0.695429861 9.14431787 5.03734929 9.14431787 5.03734929 22.6930505 5.03734929 39.1250878"></polygon>
                                        <path d="M11.409257,9.14431787 L23.1380784,9.14431787 C34.303014,9.14431787 39.2088191,17.0664074 39.2088191,24.1486995 C39.2088191,31.846843 33.1470485,39.1530811 23.1944669,39.1530811 L11.409257,39.1530811 L11.409257,9.14431787 Z M15.7511765,35.2620194 L22.6587756,35.2620194 C32.49858,35.2620194 34.7541226,27.8438084 34.7541226,24.1486995 C34.7541226,18.1301509 30.8915059,13.0353795 22.4332213,13.0353795 L15.7511765,13.0353795 L15.7511765,35.2620194 Z" id="Shape"></path>
                                        <path d="M5.71401206,2.90182329 C5.71401206,4.441452 4.44526937,5.72914146 2.86638958,5.72914146 C1.28750978,5.72914146 0.0187670918,4.441452 0.0187670918,2.90182329 C0.0187670918,1.33420133 1.28750978,0.0745051096 2.86638958,0.0745051096 C4.44526937,0.0745051096 5.71401206,1.36219458 5.71401206,2.90182329 Z" id="Path"></path>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </a>
        </li>
        
        <li class="ms-3">
            <a href="https://github.com/tkfellows" class="text-muted">
                <i title="GitHub" class="bi bi-github"></i>
            </a>
        </li>
        <li class="ms-3">
            <a href="https://www.instagram.com/_tfellows_/?hl=en" class="text-muted">
                <i title="Instagram" class="bi bi-instagram"></i>
            </a>
        </li>
        </ul>
    </footer>
    `;
};
getNavbarFooter();

