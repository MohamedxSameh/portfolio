import styles from './styles/hello.module.css';
function Hello() {
  return (
    <div className={styles['hello']}>
      <svg
        width="1034"
        height="212"
        className={styles['svg']}
        viewBox="0 0 1034 212"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M176.422 209H120.594V125.188H56.0469V209H0.21875V3.40625H56.0469V79.625H120.594V3.40625H176.422V209Z"
          fill="#212121"
        />
        <path
          d="M374.742 209H252.68V3.40625H374.742V47.9844H308.227V80.3281H369.821V124.906H308.227V163.719H374.742V209Z"
          fill="#212121"
        />
        <path
          d="M442.422 209V3.40625H497.969V164.141H577.141V209H442.422Z"
          fill="#212121"
        />
        <path
          d="M641.727 209V3.40625H697.274V164.141H776.446V209H641.727Z"
          fill="#212121"
        />
        <path
          d="M1033.41 105.922C1033.41 140.516 1024.92 166.812 1007.95 184.812C990.986 202.812 966.142 211.812 933.423 211.812C901.173 211.812 876.423 202.766 859.173 184.672C842.017 166.578 833.439 140.234 833.439 105.641C833.439 71.4219 841.97 45.3125 859.032 27.3125C876.189 9.21875 901.079 0.171875 933.704 0.171875C966.423 0.171875 991.22 9.125 1008.09 27.0312C1024.97 44.9375 1033.41 71.2344 1033.41 105.922ZM891.939 105.922C891.939 145.672 905.767 165.547 933.423 165.547C947.486 165.547 957.892 160.719 964.642 151.062C971.486 141.406 974.907 126.359 974.907 105.922C974.907 85.3906 971.439 70.25 964.501 60.5C957.657 50.6562 947.392 45.7344 933.704 45.7344C905.861 45.7344 891.939 65.7969 891.939 105.922Z"
          fill="#212121"
        />
      </svg>
    </div>
  );
}
export default Hello;