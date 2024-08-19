export const metadata = {
  title: "Santosh Pisini - Resume",
};

export default function Resume() {
  return (
    <div className="w-screen h-screen">
      <iframe
        src="https://firebasestorage.googleapis.com/v0/b/personal-website-sp.appspot.com/o/santosh_pisini__resume.pdf?alt=media"
        // type="application/pdf"
        width="100%"
        height="100%"
        title="Santosh Pisini's Resume"
      />
    </div>
  );
}
