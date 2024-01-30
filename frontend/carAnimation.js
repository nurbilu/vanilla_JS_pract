document.addEventListener("DOMContentLoaded", () => {
    var canvas = document.getElementById('carCanvas');
    var ctx = canvas.getContext('2d');
    var carWidth = 50;
    var carHeight = 30;
    var carX = 0;
    var carY = canvas.height / 2 - carHeight / 2;
    var speed = 3.5;

    const drawRoad = () => {
        // Draw the road
        ctx.fillStyle = 'gray';
        ctx.fillRect(0, canvas.height - 50, canvas.width, 50);

        // Draw the lane dividers
        ctx.fillStyle = 'white';
        for (let i = 0; i < canvas.width; i += 40) {
            ctx.fillRect(i, canvas.height - 25, 20, 5);
        }
    };

    const drawCar = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

        // Draw the car
        ctx.fillStyle = 'blue';
        ctx.fillRect(carX, carY, carWidth, carHeight);

        // Update the car's position
        carX += speed;

        // Repeat the animation
        if (carX > canvas.width) {
            carX = -carWidth; // Start from the left again
        }

        requestAnimationFrame(drawCar);
    }

    drawCar();
});
