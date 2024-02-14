import React, { useRef, useState } from 'react';
import { Button, DropZone, Flex, Text, VisuallyHidden } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Image from 'next/image';

const acceptedFileTypes = ['image/png', 'image/jpeg'];

export default function UploadImage() {
  const [files, setFiles] = useState(new Set());
  const hiddenInput = useRef(null);

  const onFilePickerChange = (event) => {
    const { files: newFiles } = event.target;
    if (!newFiles || newFiles.length === 0) {
      return;
    }
    const mergedFiles = new Set([...files, ...newFiles]);
    setFiles(mergedFiles);
  };

  const handleViewImage = (imageUrl) => {
    window.open(imageUrl, '_blank');
  };

  const handleDeleteImage = (fileName) => {
    const updatedFiles = new Set(files);
    updatedFiles.forEach((file) => {
      if (file.name === fileName) {
        updatedFiles.delete(file);
      }
    });
    setFiles(updatedFiles);
  };

  return (
    <>
      <div className='w-full mb-[4rem]'>
        <p className='text-[#000000] text-[18px] mb-5 '>تصاویر ملک را بارگذاری کنید</p>
        <DropZone
          style={{border: '2px dashed #26397f80',width: '100%',height: '117px', padding:'0', margin: '0'}}
          acceptedFileTypes={acceptedFileTypes}
          onDropComplete={({ acceptedFiles, rejectedFiles }) => {
            const mergedFiles = new Set([...files, ...acceptedFiles]);
            setFiles(mergedFiles);
          }}
        >
          <Flex direction="column" alignItems="center"
          style={{width: '100%',height: '100%'}}
          >
            <Text style={{marginTop: '18px'}}>فایل را به داخل کادر بکشید</Text>
            <Button style={{border: '2px solid #434C5D', borderRadius: '6px', width: '86px', height: '36px'}} size="small" onClick={() => hiddenInput.current.click()}>
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.937023" y="0.75" width="22.5" height="22.5" rx="11.25" stroke="#434C5D" strokeWidth="1.5"/>
                <path d="M11.9031 16.6733C11.9031 16.954 12.1308 17.1816 12.4114 17.1816C12.692 17.1816 12.9197 16.9543 12.9197 16.6733V7.35827C12.9197 7.07761 12.6921 6.85 12.4114 6.85C12.1307 6.85 11.9031 7.07762 11.9031 7.35827V16.6733Z" fill="#434C5D" stroke="#434C5D" strokeWidth="0.3"/>
                <path d="M12.4115 8.07848L9.90486 10.5851L9.90476 10.5852L9.7987 10.4791L12.4115 8.07848ZM12.4115 8.07848L14.9182 10.5852C15.0173 10.6843 15.1478 10.734 15.2776 10.734L12.4115 8.07848ZM15.637 10.5852C15.8355 10.3866 15.8355 10.0649 15.637 9.86637L12.7709 7.00026C12.5724 6.80177 12.2504 6.80162 12.052 7.00033L15.637 10.5852ZM15.637 10.5852C15.5376 10.6848 15.407 10.734 15.2776 10.734L15.6372 10.585C15.6371 10.5851 15.6371 10.5851 15.637 10.5852Z" fill="#434C5D" stroke="#434C5D" strokeWidth="0.3"/>
              </svg>
              <p className='pr-2 text-[#434C5D]'>آپلود</p>
            </Button>
          </Flex>
          <VisuallyHidden
          >
            <input
          style={{width: '100%',height: '100%', margin: '50rem'}}
              type="file"
              tabIndex={-1}
              ref={hiddenInput}
              onChange={onFilePickerChange}
              multiple={true}
              accept={acceptedFileTypes.join(',')}
            />
          </VisuallyHidden>
        </DropZone>
        <div className="flex flex-wrap justify-center sm:justify-normal gap-3">
          {[...files].map((file) => (
            <div key={file.name} className="relative mt-5 w-[104px] h-[104px] rounded-[3px] border-double border-[5px]">
              <Image
                src={URL.createObjectURL(file)}
                alt={file.name}
                width={200}
                height={200}
                quality={100}
                className='absolute w-full h-full '
              />
              <div className='absolute w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 transition duration-300 gap-x-2 hover:bg-black hover:bg-opacity-30'>
                <svg className='cursor-pointer' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => handleDeleteImage(file.name)}>
                  <path d="M5.28544 2.14118H5.14258C5.22115 2.14118 5.28544 2.0769 5.28544 1.99833V2.14118H10.714V1.99833C10.714 2.0769 10.7783 2.14118 10.8569 2.14118H10.714V3.4269H11.9997V1.99833C11.9997 1.36797 11.4872 0.855469 10.8569 0.855469H5.14258C4.51222 0.855469 3.99972 1.36797 3.99972 1.99833V3.4269H5.28544V2.14118ZM14.2854 3.4269H1.71401C1.39794 3.4269 1.14258 3.68225 1.14258 3.99833V4.56975C1.14258 4.64833 1.20686 4.71261 1.28544 4.71261H2.36401L2.80508 14.0519C2.83365 14.6608 3.33722 15.1412 3.94615 15.1412H12.0533C12.664 15.1412 13.1658 14.6626 13.1944 14.0519L13.6354 4.71261H14.714C14.7926 4.71261 14.8569 4.64833 14.8569 4.56975V3.99833C14.8569 3.68225 14.6015 3.4269 14.2854 3.4269ZM11.9158 13.8555H4.08365L3.65151 4.71261H12.3479L11.9158 13.8555Z" fill="white"/>
                </svg>
                <svg className='cursor-pointer' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"  onClick={() => handleViewImage(URL.createObjectURL(file))}>
                  <path d="M15.6822 7.5404C13.9894 3.97433 11.4305 2.17969 8.0001 2.17969C4.56796 2.17969 2.01082 3.97433 0.31796 7.54219C0.250059 7.68597 0.214844 7.843 0.214844 8.00201C0.214844 8.16102 0.250059 8.31805 0.31796 8.46183C2.01082 12.0279 4.56975 13.8225 8.0001 13.8225C11.4322 13.8225 13.9894 12.0279 15.6822 8.46005C15.8197 8.17076 15.8197 7.83505 15.6822 7.5404ZM8.0001 12.5368C5.11975 12.5368 3.01082 11.0761 1.52332 8.00112C3.01082 4.92612 5.11975 3.4654 8.0001 3.4654C10.8805 3.4654 12.9894 4.92612 14.4769 8.00112C12.9912 11.0761 10.8822 12.5368 8.0001 12.5368ZM7.92867 4.85826C6.19296 4.85826 4.78582 6.2654 4.78582 8.00112C4.78582 9.73683 6.19296 11.144 7.92867 11.144C9.66439 11.144 11.0715 9.73683 11.0715 8.00112C11.0715 6.2654 9.66439 4.85826 7.92867 4.85826ZM7.92867 10.0011C6.82332 10.0011 5.92867 9.10647 5.92867 8.00112C5.92867 6.89576 6.82332 6.00112 7.92867 6.00112C9.03403 6.00112 9.92868 6.89576 9.92868 8.00112C9.92868 9.10647 9.03403 10.0011 7.92867 10.0011Z" fill="white"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
