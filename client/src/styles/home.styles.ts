// client/src/styles/home.styles.ts
import { StyleSheet } from 'react-native';


export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20, 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  summaryCard: {
    borderRadius: 16,
    marginBottom: 24,
    elevation: 4,
  },
  statsRow: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  divider: {
    width: 1,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  statText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#ffffff',
    opacity: 0.8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    marginTop: 10,
  },
  actionGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  actionCard: {
    width: '48%',
    borderRadius: 12,
    backgroundColor: '#ffffff',
    elevation: 2,
  },
  actionContent: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  actionText: {
    marginTop: 8,
    fontWeight: '600',
  },
  goalCard: {
    marginBottom: 40,
    backgroundColor: '#ffffff',
    elevation: 2,
  },
});