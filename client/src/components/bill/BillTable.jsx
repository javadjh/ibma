import React, {Fragment} from "react";
import PagingComponent from "../../utility/PagingComponent";
const BillTable =({bills,handelPaging,handleUpsertIntent})=>{
    console.log(bills)
    return(
        <Fragment>
            <div className="table-responsive">
                <table className="table align-items-center table-flush">
                    <thead className="thead-light">
                    <tr>
                        <th scope="col">واحد</th>
                        <th scope="col">نوع</th>
                        <th scope="col">مبلغ</th>
                        <th scope="col">حدود تاریخ</th>
                        <th scope="col">دانلود</th>
                    </tr>
                    </thead>
                    <tbody>
                    {bills.bills.map((bill,index) =>(

                        <tr>
                            <th scope="row">
                                <div className="media align-items-center">
                                    <a onClick={()=>{
                                        handleUpsertIntent(bill)
                                    }} className="avatar rounded-circle ml-3" style={{cursor:"pointer"}}>
                                        {(index+bills.pageId*bills.eachPerPage-bills.eachPerPage+1)}
                                    </a>
                                    <div className="media-body">
                                        <span className="mb-0 text-sm">{`${bill.homeNumber}`}</span>
                                    </div>
                                </div>
                            </th>
                            <td >
                                {bill.type==="gas"?"گاز":bill.type==="water"?"آب":"برق"}
                            </td>
                            <td>
                                {bill.price} تومان
                            </td>
                            <td>
                                {`${bill.startDate} - ${bill.endDate}`}
                            </td>
                            <td>
                                <a href={`/${bill.file}`}>دانلود قبض</a>
                            </td>

                        </tr>
                    ))}

                    </tbody>
                </table>
            </div>
            <PagingComponent pageId={bills.pageId}
                             total={bills.total}
                             eachPerPage={bills.eachPerPage}
                             handelPaging={handelPaging}/>
        </Fragment>
    )
}
export default BillTable
