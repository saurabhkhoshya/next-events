import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";
import { useRouter } from "next/router";
import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/events-search";

function AllEventPage(props) {
  const router = useRouter();
  const { events } = props;

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }
  return (
    <Fragment>
       <Head>
        <title>NextJs Events</title>
        <meta name="description" content="Find a lot of great events that allow you to evolve"></meta>
      </Head>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const events = getAllEvents();
  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}
export default AllEventPage;
