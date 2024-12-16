import CardLayout from "../../Common/CardLayout";

const ReviewCard = ({ data }) => {
  return (
    <CardLayout>
      <div
        className="flex flex-col justify-between card_stylings w-100 md:w-100 h-full p-2"
        style={{ minWidth: "300px" }}
      >
        <img className="w-100 h-100" src={data?.url} />
      </div>
    </CardLayout>
  );
};

export default ReviewCard;
