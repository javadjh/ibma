import React from 'react'

const AdsTable = ({ads,handleDeleteAd})=>{
    return(
        <div className="table-responsive">
            <table className="table align-items-center table-flush">
                <thead className="thead-light">
                <tr>
                    <th scope="col">عنوان</th>
                    <th scope="col">لینک</th>
                    <th scope="col">عملیات</th>
                </tr>
                </thead>
                <tbody>
                {ads.map((ads,index) =>(

                    <tr>
                        <th scope="row">
                            <div className="media align-items-center">
                                <a href="#" className="avatar rounded-circle ml-3">
                                    {(index+1)}
                                </a>
                                <div className="media-body">
                                    <span className="mb-0 text-sm">{`${ads.title}`}</span>
                                </div>
                            </div>
                        </th>
                        <td>
                            <a href={ads.url} target={"_blank"}>{ads.url}</a>
                        </td>
                        <td>
                            <a onClick={event => handleDeleteAd(ads._id)} style={{color:"red",fontWeight:"bold",cursor:"pointer"}}>حذف</a>
                        </td>
                    </tr>
                ))}

                </tbody>
            </table>
        </div>
    )
}
export default AdsTable
