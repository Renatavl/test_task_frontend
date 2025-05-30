import { useCallback, useEffect, useState } from "react";
import companyService from "../../../../../services/company.service";
import { ICompanyDTO } from "../../../../../dto/company.dto";

interface ICompanyInfoProps {
  companyId: string;
}

const CompanyInfo = ({ companyId }: ICompanyInfoProps) => {
  const [company, setCompany] = useState<null | ICompanyDTO>(null);

  const fetchData = useCallback(async () => {
    const companyData = await companyService.getCompanyById(companyId);
    setCompany(companyData);
  }, [companyId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (company == null) {
    return <></>;
  }

  return (
    <div className="p-4 h-full overflow-auto">
      <p>
        <b>ticker: </b>
        {company.ticker}
      </p>
      <p>
        <b>name: </b>
        {company.name}
      </p>
      <p>
        <b>Legal name: </b>
        {company.legal_name}
      </p>
      <p>
        <b>Stock exchange: </b>
        {company.stock_exchange}
      </p>
      <p>
        <b>Short description: </b>
        {company.short_description}
      </p>
      <p>
        <b>Long description: </b>
        {company.long_description}
      </p>
      <p>
        <b>Web: </b>
        {company.company_url}
      </p>
      <p className="mb-7">
        <b>Business Address: </b>
        {company.business_address}
      </p>
      <p>
        <b>Business Phone: </b>
        {company.business_phone_no}
      </p>
      <p>
        <b>Entity legal form: </b>
        {company.entity_legal_form}
      </p>
      <p>
        <b>Latest filing date: </b>
        {company.latest_filing_date}
      </p>
      <p>
        <b>Inc country: </b>
        {company.inc_country}
      </p>
      <p>
        <b>Employees: </b>
        {company.employees}
      </p>
      <p>
        <b>Sector: </b>
        {company.sector}
      </p>
      <p>
        <b>Industry category: </b>
        {company.industry_category}
      </p>
      <p>
        <b>Industry group: </b>
        {company.industry_group}
      </p>
      <p>first_stock_price_date {company.first_stock_price_date}</p>
      <p>last_stock_price_date {company.last_stock_price_date}</p>
      <p>
        <b>Thea enabled true legacy sector: </b>
        {company.legacy_sector}
      </p>
      <p>
        <b>Legacy industry category: </b>
        {company.legacy_industry_category}
      </p>
      <p>
        <b>Legacy industry group: </b>
        {company.legacy_industry_group}
      </p>
    </div>
  );
};

export default CompanyInfo;
