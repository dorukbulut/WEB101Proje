export default function EventsPreview () {


    return(
        <div className="flex flex-col space-y-5">
            <p>Upcoming Events</p>
            <div class="table w-1/2">
                <div class="table-header-group">
                    <div class="table-row">
                        <div class="table-cell text-left ">Name</div>
                        <div class="table-cell text-left ">Mentor</div>
                        <div class="table-cell text-left ">Date</div>
                    </div>
                    </div>
                    <div class="table-row-group">
                        <div class="table-row">
                        <div class="table-cell">The Sliding Mr. Bones (Next Stop, Pottersville)</div>
                        <div class="table-cell ">Malcolm Lockyer</div>
                        <div class="table-cell ">1961</div>
                    </div>
                    <div class="table-row">
                        <div class="table-cell">Witchy Woman</div>
                        <div class="table-cell">The Eagles</div>
                        <div class="table-cell">1972</div>
                    </div>
                    <div class="table-row">
                        <div class="table-cell ">Shining Star</div>
                        <div class="table-cell ">Earth, Wind, and Fire</div>
                        <div class="table-cell ">1975</div>
                    </div>
                </div>
            </div>
        </div>
        

    );
}