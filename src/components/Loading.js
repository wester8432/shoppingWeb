import ReactLoading from "react-loading";

export default function Loading({ isLoading }) {
  return (
    <>
      {isLoading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: "gray",
            zIndex: 9999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backdropFilter: "blur(5px)",
          }}
        >
          <ReactLoading type="bubbles" color="black" height={60} width={100} />
        </div>
      )}
    </>
  );
}
