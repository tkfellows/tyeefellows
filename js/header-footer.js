function getNavbarHeader() {
    let navbarHeader = document.getElementById("navbar-header");
    navbarHeader.innerHTML=
    `
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
        <div class="container-lg">
            <a class="navbar-brand text-black fs-3" href="http://tyeefellows.com/index.html">
                <i class="bi bi-heart-pulse me-2" style='font-size:50px;'></i>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
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
                </ul>
            </div>
        </div>
    </nav>
    `;
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
        <span class="mb-3 mb-md-0 text-muted">© 2022 by Tyee Fellows</span>
        </div>

        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
        <!-- <li class="ms-3">
            <a class="text-muted" href="https://twitter.com/FellowsTyee?lang=en">
                <i class="bi bi-twitter"></i>                
            </a>
        </li> -->
        <li class="ms-3">
            <a href="mailto:tyee.fellows@medportal.ca" class="text-muted">
                <i class="bi bi-envelope-fill"></i>
            </a>
        </li>
        <li class="ms-3">
            <a href="https://ca.linkedin.com/in/tyee-fellows-9678a1185" class="text-muted">
                <i class="bi bi-linkedin"></i>
            </a>
        </li>
        <li class="ms-3">
            <a href="https://www.researchgate.net/profile/Tyee-Fellows-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="pb-1"  xml:space="preserve" width="20" height="20" fill="currentColor" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 32 32" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xodm="http://www.corel.com/coreldraw/odm/2003">
                <defs>
                <style type="text/css">
                <![CDATA[
                .fil0 {fill:grey;fill-rule:nonzero}
                .fil1 {fill:white;fill-rule:nonzero}
                ]]>
                </style>
                </defs>
                <g id="Capa_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer"/>
                <path class="fil0" d="M32.04 15.97c0,8.85 -7.18,16.03 -16.02,16.03 -8.85,0 -16.02,-7.18 -16.02,-16.03 0,-8.85 7.17,-16.03 16.02,-16.03 8.84,0 16.02,7.18 16.02,16.03zm-14.79 7c-1.43,-0.28 -2.28,-1.11 -4.45,-4.33 -0.72,-1.08 -0.72,-1.08 -1.42,-1.13 -1.03,-0.07 -0.95,-0.25 -0.92,2.02 0.04,2.58 0.01,2.52 1.5,2.77 0.39,0.06 0.42,0.09 0.42,0.32 0,0.26 0,0.26 -2.62,0.28 -2.46,0.02 -2.62,0.01 -2.67,-0.14 -0.1,-0.29 0.05,-0.43 0.59,-0.53 0.61,-0.11 0.93,-0.36 1.01,-0.78 0.04,-0.16 0.05,-2.32 0.03,-4.8 -0.03,-5.21 0.03,-4.9 -0.93,-5.11 -0.6,-0.13 -0.79,-0.27 -0.71,-0.51 0.06,-0.16 0.19,-0.17 2.92,-0.22 4.06,-0.08 4.82,0.05 5.9,1.01 1.13,1.01 1.29,2.55 0.39,3.84 -0.4,0.58 -1.2,1.2 -1.82,1.43 -0.29,0.11 -0.53,0.23 -0.53,0.27 0,0.12 0.92,1.43 1.49,2.13 1.52,1.85 2.34,2.57 3.19,2.79 0.53,0.14 0.68,0.29 0.53,0.55 -0.16,0.27 -0.96,0.33 -1.9,0.14zm-3.83 -6.63c2,-0.82 2.15,-3.57 0.25,-4.38 -0.49,-0.21 -0.62,-0.22 -1.85,-0.22 -1.33,0 -1.33,0 -1.35,2.31 -0.02,1.27 -0.01,2.37 0.02,2.43 0.09,0.21 2.34,0.1 2.93,-0.14zm6.97 -2.85c-1.55,-0.29 -2.06,-1.24 -1.98,-3.68 0.04,-1.35 0.15,-1.72 0.67,-2.28 0.92,-0.99 3.2,-0.9 4.04,0.16 0.36,0.45 0.33,0.59 -0.17,0.74 -0.39,0.13 -0.39,0.13 -0.75,-0.23 -0.85,-0.82 -2.32,-0.52 -2.58,0.54 -0.13,0.47 -0.12,2.46 0.01,2.91 0.35,1.27 2.46,1.27 2.82,0 0.22,-0.81 0.17,-0.87 -0.8,-0.92 -0.47,-0.02 -0.47,-0.02 -0.47,-0.41 0,-0.38 0,-0.38 1.12,-0.41 1.45,-0.03 1.43,-0.05 1.36,1.01 -0.09,1.33 -0.45,1.97 -1.32,2.35 -0.57,0.24 -1.35,0.33 -1.95,0.22z"/>
                <path class="fil1" d="M17.25 22.97c-1.43,-0.28 -2.28,-1.11 -4.45,-4.33 -0.72,-1.08 -0.72,-1.08 -1.42,-1.13 -1.03,-0.07 -0.95,-0.25 -0.92,2.02 0.04,2.58 0.01,2.52 1.5,2.77 0.39,0.06 0.42,0.09 0.42,0.32 0,0.26 0,0.26 -2.62,0.28 -2.46,0.02 -2.62,0.01 -2.67,-0.14 -0.1,-0.29 0.05,-0.43 0.59,-0.53 0.61,-0.11 0.93,-0.36 1.01,-0.78 0.04,-0.16 0.05,-2.32 0.03,-4.8 -0.03,-5.21 0.03,-4.9 -0.93,-5.11 -0.6,-0.13 -0.79,-0.27 -0.71,-0.51 0.06,-0.16 0.19,-0.17 2.92,-0.22 4.06,-0.08 4.82,0.05 5.9,1.01 1.13,1.01 1.29,2.55 0.39,3.84 -0.4,0.58 -1.2,1.2 -1.82,1.43 -0.29,0.11 -0.53,0.23 -0.53,0.27 0,0.12 0.92,1.43 1.49,2.13 1.52,1.85 2.34,2.57 3.19,2.79 0.53,0.14 0.68,0.29 0.53,0.55 -0.16,0.27 -0.96,0.33 -1.9,0.14zm-3.83 -6.63c2,-0.82 2.15,-3.57 0.25,-4.38 -0.49,-0.21 -0.62,-0.22 -1.85,-0.22 -1.33,0 -1.33,0 -1.35,2.31 -0.02,1.27 -0.01,2.37 0.02,2.43 0.09,0.21 2.34,0.1 2.93,-0.14zm6.97 -2.85c-1.55,-0.29 -2.06,-1.24 -1.98,-3.68 0.04,-1.35 0.15,-1.72 0.67,-2.28 0.92,-0.99 3.2,-0.9 4.04,0.16 0.36,0.45 0.33,0.59 -0.17,0.74 -0.39,0.13 -0.39,0.13 -0.75,-0.23 -0.85,-0.82 -2.32,-0.52 -2.58,0.54 -0.13,0.47 -0.12,2.46 0.01,2.91 0.35,1.27 2.46,1.27 2.82,0 0.22,-0.81 0.17,-0.87 -0.8,-0.92 -0.47,-0.02 -0.47,-0.02 -0.47,-0.41 0,-0.38 0,-0.38 1.12,-0.41 1.45,-0.03 1.43,-0.05 1.36,1.01 -0.09,1.33 -0.45,1.97 -1.32,2.35 -0.57,0.24 -1.35,0.33 -1.95,0.22zm0 0z"/>
                </g>
            </svg>
            </a>
        </li>
        <li class="ms-3">
            <a href="https://github.com/tkfellows" class="text-muted">
                <i class="bi bi-github"></i>
            </a>
        </li>
        <li class="ms-3">
            <a href="https://www.instagram.com/_tfellows_/?hl=en" class="text-muted">
                <i class="bi bi-instagram"></i>
            </a>
        </li>
        </ul>
    </footer>
    `;
};
getNavbarFooter();

