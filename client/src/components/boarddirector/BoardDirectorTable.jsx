import React, {Fragment} from "react";
import PagingComponent from "../../utility/PagingComponent";

const BoardDirectorTable = ({boardDirectors,handleDeleteBoardDirector})=>{
    return(
        <Fragment>
            <div className="table-responsive">
                <table className="table align-items-center table-flush">
                    <thead className="thead-light">
                    <tr>
                        <th scope="col">نام</th>
                        <th scope="col">شماره واحد</th>
                        <th scope="col">عنوان</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {boardDirectors.map((boardDirector,index) =>(

                        <tr>
                            <th scope="row">
                                <div className="media align-items-center">
                                    <a href="#" className="avatar rounded-circle ml-3">
                                        {(index+1)}
                                    </a>
                                    <div className="media-body">
                                        <span className="mb-0 text-sm">{`${boardDirector.name} ${boardDirector.lastName}`}</span>
                                    </div>
                                </div>
                            </th>
                            <td>
                                <a>{boardDirector.homeNumber}</a>
                            </td>
                            <td>
                                <a>{boardDirector.title}</a>
                            </td>
                            <td>
                                <a onClick={event => handleDeleteBoardDirector(boardDirector._id)} style={{color:"red",fontWeight:"bold",cursor:"pointer"}}>حذف</a>
                            </td>
                        </tr>
                    ))}

                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}
export default BoardDirectorTable
