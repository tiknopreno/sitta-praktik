const headerComponent = `
  <nav class="container nav-wrapper">
            <div class="logo">
                <h1>SITTA</h1>
            </div>
            <ul class="nav-menu" id="nav-menu">
                <li>
                    <a href="index.html" class="nav-link">
                        <i class="bx bx-home"></i><span>Home</span>
                    </a>
                </li>
                <li>
                    <a href="bahan-ajar.html" class="nav-link">
                        <i class="bx bx-library"></i><span>Bahan Ajar</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link">
                        <i class="bx bx-map-pin"></i><span>Tracking</span>
                    </a>
                </li>
                <li class="dropdown-wrapper">
                    <a href="#" class="nav-link">
                        <i class='bx bx-bar-chart-alt-2'></i>
                        Laporan <i class='bx bx-chevron-down'></i>
                    </a>
                    <div class="dropdown-box">
                        <a href="#">Monitoring Progress DO Bahan Ajar</a>
                        <a href="#">Rekap Bahan Ajar</a>
                    </div>
                </li>
                <li>
                    <a href="#" class="nav-link">
                        <i class="bx bx-transfer"></i><span>Transaksi</span>
                    </a>
                </li>
                <li>
                    <a href="login.html" class="nav-link hidden log-in">
                        <i class="bx bx-user"></i><span>Sign In</span>
                    </a>
                    <a href="#" onclick="logout(event)" class="nav-link hidden log-out">
                        <i class="bx bx-power-off"></i><span>Logout</span>
                    </a>
                </li>
            </ul>

            <div class="nav-actions">
                <button class="icon-btn hidden log-in" onclick="sign(event)"><i class='bx bx-user-circle'></i></button>
                <button class="icon-btn hidden log-out" onclick="logout(event)"><i class='bx bx-power-off'></i></button>
            </div>
        </nav>
`;