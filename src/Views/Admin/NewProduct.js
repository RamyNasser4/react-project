import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import AddForm from "../../Components/Forms/AddForm";
function NewProduct(){
    return(
        <>
            {/*  <!-- component -->
            <!-- This is an example component --> */}
            <div>
                <div class="flex overflow-hidden bg-white pt-16">
                    <Sidebar></Sidebar>
                    <div class="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
                    <div id="main-content" class="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
                        <main>
                            <div class="py-6 px-4">
                                <div class="w-full ">
                                    <div class="bg-white w-full shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                                        <AddForm></AddForm>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <script async defer src="https://buttons.github.io/buttons.js"></script>
                <script src="https://demo.themesberg.com/windster/app.bundle.js"></script>
            </div>
        </>
    );
}
export default NewProduct;