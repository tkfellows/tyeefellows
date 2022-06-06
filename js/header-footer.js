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
        <span class="mb-3 mb-md-0 text-muted">© 2022. Created by Tyee Fellows</span>
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
            <a href="https://orcid.org/0000-0003-2656-8537">
                <svg width="20px" height="20px" class="pb-1" viewBox="0 0 72 72" version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <!-- Generator: sketchtool 53.1 (72631) - https://sketchapp.com -->
                    <title>Orcid logo</title>
                    <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="hero" transform="translate(-924.000000, -72.000000)" fill-rule="nonzero">
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

