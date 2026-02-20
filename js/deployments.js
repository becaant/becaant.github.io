// Initialize map
const map = L.map('deployment-map').setView([45.4215, -75.6972], 4);

// OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Example deployment pin
const UTIAS = L.marker([44.5008, -80.2169]).addTo(map);

UTIAS.bindPopup(`
    <div class="popup-content">
        <h3>UTIAS, Toronto, Ontario</h3>
        <img src="assets/utias/utias.jpg" alt="UTIAS">
        <p>
            Grad school at the University of Toronto Institute for Aerospace Studies, at the Autonomous Space Robotics Lab.
        </p>
    </div>
`);

const suffield = L.marker([50.2712, -111.1632]).addTo(map);

suffield.bindPopup(`
    <div class="popup-content">
        <h3>Medicine Hat, Alberta</h3>
        <img src="assets/drdc/argo.jpg" alt="Suffield">
        <p>
            Summer internship at DRDC Suffield. Developing GPS-denied autonomy.
        </p>
    </div>
`);

const Kingston = L.marker([44.2629, -76.5171]).addTo(map);

Kingston.bindPopup(`
    <div class="popup-content">
        <h3>Kingston, ON</h3>
        <img src="assets/autodrive/KCity2.jpg" alt="KCity">
        <p>
            Queen's AutoDrive test track. Wouldn't drive loops anywhere else!
        </p>
    </div>
`);

const MCity = L.marker([42.3001, -83.6979]).addTo(map);

MCity.bindPopup(`
    <div class="popup-content">
        <h3>University of Michigan</h3>
        <img src="assets/autodrive/qa-team-photo.jpeg" alt="Queen's AutoDrive">
        <p>
            Deployed our autonomous car at MCity. 3rd place in the (self-driving) Intersection Challenge.
        </p>
    </div>
`);

const Calgary = L.marker([51.067737, -114.115350]).addTo(map);

Calgary.bindPopup(`
    <div class="popup-content">
        <h3>Calgary Alberta</h3>
        <img src="assets/grader/CRV.png" alt="CRV Lightning Talk">
        <p>
            Presented Single Track Control for Motor Graders at the Conference on Robots and Vision (CRV).
        </p>
    </div>
`);