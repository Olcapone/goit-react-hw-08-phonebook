import React, { useEffect } from "react";
import shortid from "shortid";
//=== redux
import { connect, useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import * as operations from "../../redux/contacts/contacts-operations";
import { getContacts } from "../../redux/contacts/contacts-selectors";

//=== styles
import s from "./ContactList.module.css";

function ContactList({ onDelete }) {
  const dispatch = useDispatch();
  const contact = useSelector(getContacts);

  useEffect(() => {
    dispatch(operations.fetchContact());
  }, [dispatch]);

  return (
    <>
      {contact.length !== 0 && (
        <ul className={s.list}>
          {contact.map(({ name, number, id }) => (
            <li className={s.item} key={shortid.generate()}>
              {name} : {number}{" "}
              <button
                className={s.button}
                type="button"
                onClick={() => onDelete(id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(operations.deleteContact(id)),
});

export default connect(null, mapDispatchToProps)(ContactList);
