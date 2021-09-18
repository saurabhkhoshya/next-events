import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/events-search";
import { Fragment } from "react";
function AllEventPage() {
  const events = getAllEvents();
  return (
    <Fragment>
      <EventSearch />
      <EventList items={events} />
    </Fragment>
  );
}

export default AllEventPage;
