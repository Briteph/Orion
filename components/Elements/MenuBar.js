import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaChevronLeft as BackIcon } from "react-icons/fa";
import { BsFillTrashFill as TrashCan } from "react-icons/bs";
import { FiMoreVertical as MoreIcon } from "react-icons/fi";
import Tooltip from "./Tooltip";
import FullScreenModal from "../Modals/FullScreenModal";
import Card from "./Card";
import ButtonPrimary from "./ButtonPrimary";

export default function MenuBar() {
  const router = useRouter();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isDisplayingInfo, setIsDisplayingInfo] = useState(false);
  const urls = ["/info", "/profile"];

  useEffect(() => {
    setIsDisplayingInfo(urls.some((e) => router.pathname.includes(e)));
  }, []);

  return (
    <div className="flex items-center gap-2">
      <FullScreenModal show={showDeleteModal}>
        <Card>
          <div className="flex flex-col">
            <div className="font-normal pb-5">
              Do you wish to delete permanently?
            </div>
            <div className="flex items-center justify-end">
              <ButtonPrimary
                addClass="bg-black"
                onClick={() => setShowDeleteModal(false)}
              >
                Yes
              </ButtonPrimary>
              <ButtonPrimary
                addClass="bg-black"
                onClick={() => setShowDeleteModal(false)}
              >
                Yes
              </ButtonPrimary>
            </div>
          </div>
        </Card>
      </FullScreenModal>

      <Tooltip title="Back" position="bottom">
        <div
          className="flex items-center rounded-md cursor-pointer p-2 hover:bg-[#b8c5e6] hover:bg-opacity-30"
          onClick={() => router.back()}
        >
          <BackIcon />
        </div>
      </Tooltip>
      {isDisplayingInfo ? (
        <>
          <Tooltip title="Delete" position="bottom">
            <div
              className="flex items-center rounded-md cursor-pointer p-2 hover:bg-[#b8c5e6] hover:bg-opacity-30"
              onClick={() => setShowDeleteModal(true)}
            >
              <TrashCan />
            </div>
          </Tooltip>
          <Tooltip title="More" position="bottom">
            <div
              className="flex items-center rounded-md cursor-pointer p-2 hover:bg-[#b8c5e6] hover:bg-opacity-30"
              onClick={() => {}}
            >
              <MoreIcon />
            </div>
          </Tooltip>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
