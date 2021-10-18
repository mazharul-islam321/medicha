import { useEffect, useState } from "react";

const useDepartment = () => {
    const [departments, setDepartments] = useState([]);
    useEffect(() => {
        fetch("./department.json")
            .then((res) => res.json())
            .then((data) => setDepartments(data));
    }, []);
    return [departments];
};

export default useDepartment;
