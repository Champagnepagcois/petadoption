import "../style/searchPage.css";
import ContainerCardsSearch from"../../components/ContainerCardsSearch";
import SearchInput from "../../components/SearchInput";
import axios from "axios";

const getData = () => {
  return axios
    .get(`http://localhost:3000/api/search`)
    .then((res) => {
      //console.table(res.data);
      return res.data;
    })
    .catch((err) => {
      err;
    });
};

export default async function Adoption() {
  const petDataCards = await getData();
  //console.table(data);

  return (
    <>
      <SearchInput/>
      <section className="section-items">
        <div className="section-items-container">
          <ContainerCardsSearch petDataCards={petDataCards}/>
        </div>
        <div className="items-pagination">
          <div className="item-pagination-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </div>
          <div className="item-pagination-arrow">1/2</div>
          <div className="item-pagination-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}
