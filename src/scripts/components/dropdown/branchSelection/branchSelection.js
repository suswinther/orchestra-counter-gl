$(function() {
    window.$Qmatic.components.dropdown.branchSelection = new window.$Qmatic.components.dropdown.BaseDropdownComponent('#branchListModal', {
			disable_search_threshold: 5,
    		no_results_text: "Oops, nothing found!"
		})
})
