// window.addEventListener("load", function() {
//     var teamMembers = document.querySelectorAll(".team-member");
  
//     // Add event listeners to each team member
//     teamMembers.forEach(function(member) {
//       member.addEventListener("click", function() {
//         // Remove the active class from all team members
//         teamMembers.forEach(function(member) {
//           member.classList.remove("active");
//         });
  
//         // Add the active class to the clicked team member
//         this.classList.add("active");
//       });
//     });
//   });
  
window.addEventListener("load", function() {
    var teamMembers = document.querySelectorAll(".team-member");
    var backgroundImageUrls = [
      "member1.jpg",
      "member2.jpg",
      "member3.jpg",
      "member4.jpg",
      "member5.jpg"
    ];
    var currentIndex = 0;
  
    // Function to update the background image of a team member
    function updateBackgroundImage(member, index) {
      member.style.backgroundImage = `url(${backgroundImageUrls[index]})`;
    }
  
    // Function to transition to the next background image
    function transitionBackgroundImage() {
      updateBackgroundImage(teamMembers[currentIndex], currentIndex);
      currentIndex = (currentIndex + 1) % backgroundImageUrls.length;
    }
  
    // Initialize the first background image
    updateBackgroundImage(teamMembers[0], 0);
  
    // Start the background image transition interval
    setInterval(transitionBackgroundImage, 10);


    // Function to animate the background scrolling
function animateBackgroundScroll() {
    teamMembers.forEach(function(member) {
      var currentPosition = parseInt(member.style.backgroundPositionX) || 0;
      currentPosition -= 1;
      member.style.backgroundPositionX = currentPosition + "px";
    });
  }
  

    // Start the background scroll animation
  scrollInterval = setInterval(animateBackgroundScroll, 30);

  // Stop the background scroll animation on mouseenter
  teamMembers.forEach(function(member) {
    member.addEventListener("mouseenter", function() {
      clearInterval(scrollInterval);
    });
  });

  // Restart the background scroll animation on mouseleave
  teamMembers.forEach(function(member) {
    member.addEventListener("mouseleave", function() {
      scrollInterval = setInterval(animateBackgroundScroll, 30);
    });
  });
  
    // Add event listeners to each team member
    teamMembers.forEach(function(member) {
      member.addEventListener("click", function() {
        // Remove the active class from all team members
        teamMembers.forEach(function(member) {
          member.classList.remove("active");
        });
  
        // Add the active class to the clicked team member
        this.classList.add("active");
      });
    });
  });
  

// Get the team container and member elements
const teamContainer = document.querySelector('.team-container');
const teamMembers = document.querySelectorAll('.team-member');

// Calculate the width of each team member
const memberWidth = teamMembers[0].offsetWidth;

// Set the number of members to display at a time
const membersToShow = 4;

// Calculate the total width of all members to determine the container width
const containerWidth = memberWidth * membersToShow;
teamContainer.style.width = `${containerWidth}px`;

// Set the initial position
let currentPosition = 0;

// Function to slide the members
function slideMembers(direction) {
  // Calculate the new position based on the direction
  if (direction === 'next') {
    currentPosition -= memberWidth;
  } else if (direction === 'prev') {
    currentPosition += memberWidth;
  }

  // Check if the position exceeds the limits
  if (currentPosition < -(memberWidth * (teamMembers.length - membersToShow))) {
    currentPosition = 0;
  } else if (currentPosition > 0) {
    currentPosition = -(memberWidth * (teamMembers.length - membersToShow));
  }

  // Apply the new position to the team container
  teamContainer.style.transform = `translateX(${currentPosition}px)`;
}

// Add event listeners to slide the members
document.querySelector('.next-button').addEventListener('click', () => {
  slideMembers('next');
});

document.querySelector('.prev-button').addEventListener('click', () => {
  slideMembers('prev');
});

// Add event listeners to stop sliding on hover
teamMembers.forEach((member) => {
  member.addEventListener('mouseover', () => {
    member.style.transform = 'scale(1.2)';
  });

  member.addEventListener('mouseout', () => {
    member.style.transform = 'scale(1)';
  });
});






