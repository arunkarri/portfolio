import CompanyHeader from './company-header';

const TitleTenure = (props) => (
  <div className={props.class}>
    <div>
      <CompanyHeader text={props.title} />
    </div>
    <div>
      <CompanyHeader text={props.tenure} />
    </div>
  </div>
);
export default TitleTenure;
