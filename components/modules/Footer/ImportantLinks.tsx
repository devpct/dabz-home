import LinkGroup from '@/components/modules/Footer/LinkGroup'


const ImportantLinks = () => {

    const titles = ['لینک های مهم ۱','لینک های مهم ۲']

    const linksGroup1 = [
      { href: '#', title: 'عنوان یک' },
      { href: '#', title: 'عنوان دو' },
      { href: '#', title: 'عنوان سه' },
      { href: '#', title: 'عنوان شماره چهار' }
    ];
  
    const linksGroup2 = [
      { href: '#', title: 'عنوان یک' },
      { href: '#', title: 'عنوان دو' },
      { href: '#', title: 'عنوان سه' },
      { href: '#', title: 'عنوان شماره چهار' }
    ];
  
    return (
      <>
      {/* mobile */}
      <div className='sm:hidden flex justify-between mb-5'>
        <div>
          <LinkGroup title={titles[0]} links={linksGroup1} />
        </div>
        <div>
          <LinkGroup title={titles[1]} links={linksGroup2} />
        </div>  
      </div>

        {/* desktop */}
        <div className='hidden sm:block'>
          <LinkGroup title={titles[0]} links={linksGroup1} />
        </div>
        <div className='hidden sm:block'>
          <LinkGroup title={titles[1]} links={linksGroup2} />
        </div>
      </>
    );
  };
  
  export default ImportantLinks;