import Card from "./card";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import cardsService from "../services/cardsService";
import PageHeader from "./common/pageHeader";

const MyCards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function getCards() {
      const { data } = await cardsService.getAll();
      setCards(data);
    }

    getCards();
  }, []);

  return (
    <>
      <PageHeader
        title="My Cards"
        description="your cards are in the list below"
      />
      <div className="row">
        <Link
          to="create-card"
          className="btn btn-primary mb-20"
          style={{ width: "18rem", margin: "1rem 0rem" }}
        >
          Create a New Card
        </Link>
      </div>

      <div className="row">
        {!cards.length ? (
          <p>No Cards..</p>
        ) : (
          cards.map((card) => <Card key={card._id} card={card} />)
        )}
      </div>
    </>
  );
};

export default MyCards;
