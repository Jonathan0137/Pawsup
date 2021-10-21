import HeaderMenu from "../components/HeaderMenu";
import ServiceFilter from "../components/ServiceFilter";
import ServiceSort from "../components/ServiceSort";

const ServicePage = () => {
  return (
    <>
      <HeaderMenu />

      <div>
        <ServiceFilter />
        <ServiceSort />
      </div>
    </>
  );
};

export default ServicePage;
