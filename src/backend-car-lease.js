export class MyCarLease{
  constructor(car_MSRP,trade_in_credit,down_payment,sales_tax,apr){
    this.car_MSRP = car_MSRP;
    this.trade_in_credit = trade_in_credit;
    this.down_payment = down_payment;
    this.sales_tax = sales_tax / 100;
    this.apr = apr;
    this.leaseTerm = 36;

    
    this.netCapCost = this.netCapCost();
    this.residual_value = this.residual_value();
    this.depreciationFeeMonthly = this.depreciationFeeMonthly(); //needs net cap result

    this.moneyFactor = this.moneyFactor();  //needs apr

    this.financingFeeMonthly = this.financingFeeMonthly(); //needs net cap cost, residual value, money factor

    this.salesTaxMonthly = this.salesTaxMonthly(); //needs net cap cost and monthly depreciation fee

    this.total_monthly_lease_payment = this.total_monthly_lease_payment(); //needs monthly sales tax, depreciation fee and financing fee

    this.depreciationThreeYear =   this.depreciationThreeYear();

    this.financingFeeThreeYear =   this.financingFeeThreeYear();

    this.salesTaxThreeYear =   this.salesTaxThreeYear();





  }



  netCapCost(){
    let netCap = this.car_MSRP - (this.trade_in_credit + this.down_payment);
    return netCap;
  }

  residual_value(){
    let carResidualValue = this.car_MSRP * 0.55;
    return carResidualValue;
  }

  depreciationFeeMonthly(){
      let depreciationFee = (this.netCapCost - this.residual_value) / this.leaseTerm;
      return depreciationFee;
  }

  moneyFactor(){
    let moneyFactor = this.apr / 2400;
    return moneyFactor;
  }

  financingFeeMonthly(){
    let financingFee = (this.netCapCost + this.residual_value) * this.moneyFactor;
    return financingFee;
  }

  salesTaxMonthly(){
    let salesTax = (this.depreciationFeeMonthly + this.financingFeeMonthly) * this.sales_tax;
    return salesTax;
  }

  total_monthly_lease_payment(){
    let totalMonthlyLease = this.depreciationFeeMonthly + this.financingFeeMonthly + this.salesTaxMonthly;
    if(totalMonthlyLease > 0){return totalMonthlyLease;
    }else{return "It doesn't make sense to lease the car, you can buy it in cash!";}

  }

  depreciationThreeYear(){
    let threeYearDepreciation = this.depreciationFeeMonthly * this.leaseTerm;
    if(threeYearDepreciation > 0){return threeYearDepreciation;}
    else {return " "; }

  }

  financingFeeThreeYear(){
    let threeYearFinancingFee = this.financingFeeMonthly * this.leaseTerm;
    if (threeYearFinancingFee > 0){return threeYearFinancingFee;}
    else{return " ";}
  }

  salesTaxThreeYear(){
    let threeYearTax = this.salesTaxMonthly * this.leaseTerm;
    if (threeYearTax > 0){return threeYearTax;}
    else{return " ";}

  }

}
