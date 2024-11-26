import React from 'react'

const SidebarDimond = () => {

  function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
  }


  return (
    <div id="sidebar" class="left-[-100%] top-0 h-full w-64 bg-white shadow-lg transition-transform duration-300">
      <div class="p-4">
        <h2 class="text-lg font-bold">Sidebar Content</h2>
        <p>Some content here...</p>
        <button
          type="button"
          class="mt-4 text-customGray-200 underline text-xs"
          onclick={() => toggleSidebar()}
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default SidebarDimond