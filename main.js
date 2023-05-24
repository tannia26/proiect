const assemblyRows = document.querySelectorAll('.assembly-row');

        // Add click event listener to each assembly row
        assemblyRows.forEach((row) => {
            row.addEventListener('click', function () {
                // Find the sibling dropdown element
                const dropdown = row.nextElementSibling;

                // Toggle the display of the dropdown
                dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
            });
        });
