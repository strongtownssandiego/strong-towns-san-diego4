import GoogleDocViewer from "@/components/GoogleDocViewer";

export default function Resources() {

  return (
    <div className="p-6">


      <div className="mt-8" />

      <GoogleDocViewer url="https://docs.google.com/document/d/17b4wP9Fo3H3o-Y3z1yUWmhQsasis51ZdbqHo3Ncg1o8/edit?tab=t.0" height="80vh" />
    </div>
  );
}



/*
      <GoogleDocViewer url="https://docs.google.com/document/d/1AbCdEfGhIjKlMnOpQrStUvWxYz1234567890/edit" />


    <main className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <object data="/STSD_Resources.pdf" type="application/pdf" width="100%" height="800">
        <p>Your browser does not support PDFs. <a href="/STSD_Resources.pdf">Download</a> instead.</p>
      </object>
    </main>  




import PdfViewer from "@/components/PdfViewer";

export default function PdfPage() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="max-w-5xl mx-auto">
        <PdfViewer fileUrl="/STSD_Resources.pdf" />
      </div>
    </main>
  );
}



const DynamicComponentWithNoSSR = dynamic(() => import('../components/List'), {
  ssr: false
})

export default () => <DynamicComponentWithNoSSR />




import PdfViewer from "@/components/PdfViewer";

export default function Resources() {

  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <PdfViewer fileUrl="/STSD_Resources.pdf" />
    </main>  );
}





<iframe src="https://docs.google.com/gview?url=http://remote.url.tld/path/to/document.doc&embedded=true"></iframe>


https://docs.google.com/document/d/17b4wP9Fo3H3o-Y3z1yUWmhQsasis51ZdbqHo3Ncg1o8/edit?tab=t.0#heading=h.fwvzv75ujkj1


      <iframe 
        className="w-full h-screen"
        src="https://docs.google.com/gview?url=https://docs.google.com/document/d/17b4wP9Fo3H3o-Y3z1yUWmhQsasis51ZdbqHo3Ncg1o8.doc&embedded=true">
      </iframe>

*/