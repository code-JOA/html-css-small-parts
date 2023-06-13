const track = document.getElementById('image-track');

const handleOnDown = (e) => (track.dataset.mouseDownAt = e.clientX);

const handleOnUp = (e) => {
    track.dataset.mouseDownAt = '0'
    track.dataset.prevPercentage = track.dataset.percentage;
};

const handleOnMove = (e) => {
    if (track.dataset.mouse)
}